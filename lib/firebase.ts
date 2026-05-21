// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9baV8wN39bpkbMqxx4o3aS9A9vozilj0",
  authDomain: "art-in-progress.firebaseapp.com",
  projectId: "art-in-progress",
  storageBucket: "art-in-progress.firebasestorage.app",
  messagingSenderId: "950356378623",
  appId: "1:950356378623:web:1359c5d7abac57bb8d9dca",
  measurementId: "G-P1V7KLQ8BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth } from "firebase/auth";

export const auth = getAuth(app);