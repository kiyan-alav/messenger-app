import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_API_URL",
  projectId: "messenger-3c98b",
  storageBucket: "YOUR_API_STORAGE",
  messagingSenderId: "406563576823",
  appId: "1:406563576823:web:3915ce1278655e21fdacf2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
