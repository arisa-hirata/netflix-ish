// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const API_KEY = process.env.FIREBASE_API_KEY
const MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID
const APP_ID = process.env.APP_ID

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "netflix-ish-50e34.firebaseapp.com",
  projectId: "netflix-ish-50e34",
  storageBucket: "netflix-ish-50e34.appspot.com",
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
