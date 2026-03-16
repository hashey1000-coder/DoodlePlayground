/**
 * useFirebaseVotes — real-time vote counts via Firestore.
 *
 * Firestore schema:
 *   Collection: votes
 *   Document:   {slug}
 *   Fields:     likes: number, dislikes: number
 *
 * The user's own vote is always persisted in localStorage so it survives
 * page refreshes.  Firestore counts are cached in localStorage too so the
 * TopRated leaderboard can read real data without making extra Firestore calls.
 *
 * Falls back to localStorage-only mode (counts = 0 until user votes) when
 * Firebase is not configured or unavailable.
 */
import { useState, useEffect } from 'react';
import { doc, onSnapshot, setDoc, increment } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type Votes    = { likes: number; dislikes: number };
type UserVote = 'like' | 'dislike' | null;

export function useFirebaseVotes(slug: string) {
  const cacheKey   = `game-votes-${slug}`;
  const userVoteKey = `game-uservote-${slug}`;

  /** Return cached Firestore counts (or zeros). */
  const getCached = (): Votes => {
    try {
      const s = localStorage.getItem(cacheKey);
      if (s) return JSON.parse(s) as Votes;
    } catch { /* ignore */ }
    return { likes: 0, dislikes: 0 };
  };

  /** Return the user's stored vote for this slug. */
  const getStoredUserVote = (): UserVote => {
    try {
      return localStorage.getItem(userVoteKey) as UserVote;
    } catch {
      return null;
    }
  };

  const [votes,    setVotes]    = useState<Votes>(getCached);
  const [userVote, setUserVote] = useState<UserVote>(getStoredUserVote);

  // Reset when navigating to a different game
  useEffect(() => {
    setVotes(getCached());
    setUserVote(getStoredUserVote());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  // Subscribe to Firestore real-time updates
  useEffect(() => {
    if (!db) return;

    const docRef = doc(db, 'votes', slug);
    const unsubscribe = onSnapshot(
      docRef,
      (snap) => {
        if (snap.exists()) {
          const data = snap.data() as Votes;
          const normalised: Votes = {
            likes:    Math.max(0, data.likes    || 0),
            dislikes: Math.max(0, data.dislikes || 0),
          };
          setVotes(normalised);
          // Cache for TopRated / Home leaderboard
          try { localStorage.setItem(cacheKey, JSON.stringify(normalised)); } catch { /* ignore */ }
        }
      },
      (err) => console.warn('[Firebase] onSnapshot error:', err),
    );

    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const vote = async (type: 'like' | 'dislike') => {
    const currentUserVote = getStoredUserVote();
    const newUserVote: UserVote = currentUserVote === type ? null : type;

    // 1. Persist user vote choice
    if (newUserVote) {
      localStorage.setItem(userVoteKey, newUserVote);
    } else {
      localStorage.removeItem(userVoteKey);
    }
    setUserVote(newUserVote);

    // 2. Optimistic UI update
    setVotes((prev) => {
      const next = { ...prev };
      if (currentUserVote === type) {
        // Toggle off — remove the vote
        next[type === 'like' ? 'likes' : 'dislikes'] = Math.max(0, next[type === 'like' ? 'likes' : 'dislikes'] - 1);
      } else {
        // Remove old vote first
        if (currentUserVote === 'like')    next.likes    = Math.max(0, next.likes    - 1);
        if (currentUserVote === 'dislike') next.dislikes = Math.max(0, next.dislikes - 1);
        // Add new vote
        next[type === 'like' ? 'likes' : 'dislikes'] += 1;
      }
      return next;
    });

    // 3. Write to Firestore (atomic increments)
    if (!db) return;
    try {
      const docRef = doc(db, 'votes', slug);
      const updates: Record<string, ReturnType<typeof increment>> = {};

      if (currentUserVote === type) {
        // Toggle off
        updates[type === 'like' ? 'likes' : 'dislikes'] = increment(-1);
      } else {
        if (currentUserVote === 'like')    updates.likes    = increment(-1);
        if (currentUserVote === 'dislike') updates.dislikes = increment(-1);
        updates[type === 'like' ? 'likes' : 'dislikes'] = increment(1);
      }

      await setDoc(docRef, updates, { merge: true });
    } catch (err) {
      console.warn('[Firebase] vote error:', err);
    }
  };

  return { votes, userVote, vote };
}
