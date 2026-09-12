import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDummyKeyForInitialConfig-ReplaceWithActual",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "xfin-financial-infra.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "xfin-financial-infra",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "xfin-financial-infra.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "109293838695",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:109293838695:web:dummyAppId",
};

// Singleton initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider };
