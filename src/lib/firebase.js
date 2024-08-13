import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-firebase-8db78.firebaseapp.com",
  projectId: "chatapp-firebase-8db78",
  storageBucket: "chatapp-firebase-8db78.appspot.com",
  messagingSenderId: "55880041199",
  appId: "1:55880041199:web:3ca50be4eb2761cc5cd11a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
