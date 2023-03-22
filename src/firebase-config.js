// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf0V349pCu4uORkBpDplM04nxR5KMp0lo",
  authDomain: "react-chat-82aea.firebaseapp.com",
  projectId: "react-chat-82aea",
  storageBucket: "react-chat-82aea.appspot.com",
  messagingSenderId: "288972826427",
  appId: "1:288972826427:web:8d7bd54ec6b102bd7eb91e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
