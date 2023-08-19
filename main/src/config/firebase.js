import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzlfwbXRtu2Ex9ZAv4FLrEoCUIgRpUlo8",
  authDomain: "messenger-3c98b.firebaseapp.com",
  projectId: "messenger-3c98b",
  storageBucket: "messenger-3c98b.appspot.com",
  messagingSenderId: "406563576823",
  appId: "1:406563576823:web:3915ce1278655e21fdacf2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
