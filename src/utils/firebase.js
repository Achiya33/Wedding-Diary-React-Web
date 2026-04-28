/**
 * Firebase Configuration
 * 
 * IMPORTANT: Replace the firebaseConfig values below with your actual
 * Firebase project credentials from https://console.firebase.google.com
 * 
 * Steps:
 * 1. Go to Firebase Console → Create a project (or use existing)
 * 2. Add a Web app in Project Settings
 * 3. Copy the config object and paste it below
 * 4. Enable Authentication → Email/Password in Firebase Console
 * 5. Create a Realtime Database in Firebase Console
 * 6. Enable Storage in Firebase Console
 */

import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get, set, onValue } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// ─── Firebase Config ──────────────────────────────────────────
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// ─── Check config validity BEFORE initializing ────────────────
/**
 * Check if Firebase is properly configured (not using placeholder values)
 */
export function isFirebaseConfigured() {
  return !!(
    firebaseConfig.apiKey &&
    firebaseConfig.apiKey !== 'YOUR_API_KEY' &&
    firebaseConfig.projectId &&
    firebaseConfig.projectId !== 'YOUR_PROJECT_ID' &&
    firebaseConfig.databaseURL
  )
}

// ─── Initialize Firebase (only if config is valid) ────────────
let app = null
let _db = null
let _auth = null
let _storage = null

if (isFirebaseConfigured()) {
  try {
    app = initializeApp(firebaseConfig)
    _db = getDatabase(app)
    _auth = getAuth(app)
    _storage = getStorage(app)
  } catch (err) {
    console.warn('Firebase initialization failed:', err.message)
  }
} else {
  console.warn(
    'Firebase is not configured. The app will use local/default data only. ' +
    'To connect Firebase, add valid credentials to your .env file.'
  )
}

export const db = _db
export const auth = _auth
export const storage = _storage

// ─── Database Helpers ─────────────────────────────────────────

/**
 * Read data from Firebase Realtime Database
 */
export async function dbRead(path) {
  if (!db) return null
  try {
    const snapshot = await get(ref(db, path))
    return snapshot.exists() ? snapshot.val() : null
  } catch (err) {
    console.warn(`Firebase read failed for "${path}":`, err)
    return null
  }
}

/**
 * Write data to Firebase Realtime Database
 */
export async function dbWrite(path, data) {
  if (!db) throw new Error('Firebase is not configured')
  try {
    await set(ref(db, path), data)
    return true
  } catch (err) {
    console.error(`Firebase write failed for "${path}":`, err)
    throw err
  }
}

/**
 * Subscribe to real-time updates for a given path.
 * Returns an unsubscribe function.
 */
export function dbSubscribe(path, callback) {
  if (!db) return () => {}
  const dbRef = ref(db, path)
  const unsubscribe = onValue(dbRef, (snapshot) => {
    callback(snapshot.exists() ? snapshot.val() : null)
  }, (error) => {
    console.warn(`Firebase subscription error for "${path}":`, error)
  })
  return unsubscribe
}
