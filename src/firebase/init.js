// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV8Nc3Yfb06VFKGCD3CSloGm0PMiD45RE",
  authDomain: "julius-gold-firebase-practice.firebaseapp.com",
  projectId: "julius-gold-firebase-practice",
  storageBucket: "julius-gold-firebase-practice.firebasestorage.app",
  messagingSenderId: "425452350699",
  appId: "1:425452350699:web:61641ed444372d33abe2ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();