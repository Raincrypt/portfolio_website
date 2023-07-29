import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCLfbYyTM1-gGYG4GFkVea0P63kP80poxk",
  authDomain: "portfolio-website-mousom.firebaseapp.com",
  projectId: "portfolio-website-mousom",
  storageBucket: "portfolio-website-mousom.appspot.com",
  messagingSenderId: "314102386115",
  appId: "1:314102386115:web:498ed546c5268d91250176"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();