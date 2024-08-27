import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBOaMJ5cuWBFrRVoNxQjnGZoAkTXgZ9iVs",
    authDomain: "chatapp2-3e7ae.firebaseapp.com",
    projectId: "chatapp2-3e7ae",
    storageBucket: "chatapp2-3e7ae.appspot.com",
    messagingSenderId: "522941962162",
    appId: "1:522941962162:web:8dfd9032c3d1c0f959f6ab",
    measurementId: "G-S1SWKJNKTS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();