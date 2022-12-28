// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD1j_fj_3Krv2k_zYoLVezP20u9vDERHg",
  authDomain: "netflix-ish-50e34.firebaseapp.com",
  projectId: "netflix-ish-50e34",
  storageBucket: "netflix-ish-50e34.appspot.com",
  messagingSenderId: "1003932687696",
  appId: "1:1003932687696:web:9729bd5b6d1cbecee4a055"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
