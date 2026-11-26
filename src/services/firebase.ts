import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

export interface FirebaseCustomConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const STORAGE_KEY = 'porprovsu_firebase_config';

// Default configuration with safe fallback
const DEFAULT_CONFIG: FirebaseCustomConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDummyKeyPORPROVSU2026OfficialPortal",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "porprovsu-official.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "porprovsu-official",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "porprovsu-official.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "109823487123",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:109823487123:web:porprovsuofficialsumut"
};

export function getActiveFirebaseConfig(): FirebaseCustomConfig {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.projectId && parsed.apiKey) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Could not read custom Firebase config from localStorage:', e);
  }
  return DEFAULT_CONFIG;
}

export function saveFirebaseConfig(config: FirebaseCustomConfig): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  // Reload window to re-initialize firebase cleanly
  window.location.reload();
}

export function resetFirebaseConfig(): void {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

export function getFirebaseDb(): Firestore | null {
  if (db) return db;
  try {
    const config = getActiveFirebaseConfig();
    if (!getApps().length) {
      app = initializeApp(config);
    } else {
      app = getApp();
    }
    db = getFirestore(app);
    return db;
  } catch (error) {
    console.warn('Firebase initialization note (using offline-fallback mode):', error);
    return null;
  }
}
