// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWciwSv0S0vRG9qGfjb3o4h33LnnQHYZs",
  authDomain: "amie-2025.firebaseapp.com",
  projectId: "amie-2025",
  storageBucket: "amie-2025.firebasestorage.app",
  messagingSenderId: "447080519378",
  appId: "1:447080519378:web:cf5eecab6115481fc87f0b",
  measurementId: "G-QGCDH888SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
