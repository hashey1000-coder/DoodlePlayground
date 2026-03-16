/**
 * Firebase initialisation — Realtime Database for vote counts.
 * Client-side keys are intentionally public (security is enforced by RTDB rules).
 */
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getDatabase, type Database } from 'firebase/database';

const firebaseConfig = {
  apiKey:            "AIzaSyDtEoyffhyJ9qvC00qUbUxtmXGdEy40_1U",
  authDomain:        "doodleplayground-41d6f.firebaseapp.com",
  databaseURL:       "https://doodleplayground-41d6f-default-rtdb.firebaseio.com",
  projectId:         "doodleplayground-41d6f",
  storageBucket:     "doodleplayground-41d6f.firebasestorage.app",
  messagingSenderId: "495328495069",
  appId:             "1:495328495069:web:31be2abe9dc391011e2234",
};

let app: FirebaseApp | null = null;
let db: Database | null = null;

// Guard against SSR / prerender environments where `window` doesn't exist
if (typeof window !== 'undefined') {
  try {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    db = getDatabase(app);
  } catch (err) {
    console.warn('[Firebase] Failed to initialise:', err);
  }
}

export { app, db };
