/**
 * useFirebaseVotes — real-time vote counts via Firebase Realtime Database.
 *
 * RTDB structure:
 *   votes/
 *     {slug}/
 *       likes: number
 *       dislikes: number
 *
 * Security rules to paste into Firebase Console → Realtime Database → Rules:
 * {
 *   "rules": {
 *     "votes": {
 *       "$slug": {
 *         ".read": true,
 *         ".write": true
 *       }
 *     }
 *   }
 * }
 *
 * The user's own vote is persisted in localStorage so it survives page
 * refreshes.  RTDB counts are also cached in localStorage so TopRated /
 * Home leaderboard can show real data without extra network calls.
 *
 * Falls back gracefully to local state when Firebase is unavailable.
 */
import { useState, useEffect } from 'react';
import { ref, onValue, runTransaction } from 'firebase/database';
import { db } from '@/lib/firebase';

type Votes    = { likes: number; dislikes: number };
type UserVote = 'like' | 'dislike' | null;

export function useFirebaseVotes(slug: string) {
  const cacheKey    = `game-votes-${slug}`;
  const userVoteKey = `game-uservote-${slug}`;

  const getCached = (): Votes => {
    try {
      const s = localStorage.getItem(cacheKey);
      if (s) return JSON.parse(s) as Votes;
    } catch { /* ignore */ }
    return { likes: 0, dislikes: 0 };
  };

  const getStoredUserVote = (): UserVote => {
    try { return localStorage.getItem(userVoteKey) as UserVote; }
    catch { return null; }
  };

  const [votes,    setVotes]    = useState<Votes>(getCached);
  const [userVote, setUserVote] = useState<UserVote>(getStoredUserVote);

  // Reset local state when navigating to a different game
  useEffect(() => {
    setVotes(getCached());
    setUserVote(getStoredUserVote());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  // Subscribe to RTDB real-time updates
  useEffect(() => {
    if (!db) return;

    const votesRef = ref(db, `votes/${slug}`);
    const unsubscribe = onValue(
      votesRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val() as Partial<Votes>;
          const normalised: Votes = {
            likes:    Math.max(0, data.likes    ?? 0),
            dislikes: Math.max(0, data.dislikes ?? 0),
          };
          setVotes(normalised);
          try { localStorage.setItem(cacheKey, JSON.stringify(normalised)); } catch { /* ignore */ }
        }
      },
      (err) => console.warn('[Firebase] onValue error:', err),
    );

    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const vote = async (type: 'like' | 'dislike') => {
    const currentUserVote = getStoredUserVote();
    const newUserVote: UserVote = currentUserVote === type ? null : type;

    // 1. Persist user choice
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
        next[type === 'like' ? 'likes' : 'dislikes'] = Math.max(0, next[type === 'like' ? 'likes' : 'dislikes'] - 1);
      } else {
        if (currentUserVote === 'like')    next.likes    = Math.max(0, next.likes    - 1);
        if (currentUserVote === 'dislike') next.dislikes = Math.max(0, next.dislikes - 1);
        next[type === 'like' ? 'likes' : 'dislikes'] += 1;
      }
      return next;
    });

    // 3. Atomic write to RTDB via transaction
    if (!db) return;
    try {
      const votesRef = ref(db, `votes/${slug}`);
      await runTransaction(votesRef, (current: Votes | null) => {
        const data: Votes = current ?? { likes: 0, dislikes: 0 };

        if (currentUserVote === type) {
          // Toggle off — remove the vote
          data[type === 'like' ? 'likes' : 'dislikes'] = Math.max(0, (data[type === 'like' ? 'likes' : 'dislikes'] ?? 0) - 1);
        } else {
          if (currentUserVote === 'like')    data.likes    = Math.max(0, (data.likes    ?? 0) - 1);
          if (currentUserVote === 'dislike') data.dislikes = Math.max(0, (data.dislikes ?? 0) - 1);
          data[type === 'like' ? 'likes' : 'dislikes'] = (data[type === 'like' ? 'likes' : 'dislikes'] ?? 0) + 1;
        }

        return data;
      });
    } catch (err) {
      console.warn('[Firebase] vote error:', err);
    }
  };

  return { votes, userVote, vote };
}
