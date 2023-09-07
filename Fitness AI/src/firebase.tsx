// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwUWrFqJ6J5yqQXZ7WR5wkxMw9N8YIrR0",
  authDomain: "instantchat-e5ae5.firebaseapp.com",
  projectId: "instantchat-e5ae5",
  storageBucket: "instantchat-e5ae5.appspot.com",
  messagingSenderId: "334185626122",
  appId: "1:334185626122:web:23edb799a3216e68c33df3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const db = getFirestore(app);