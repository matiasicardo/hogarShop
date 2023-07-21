import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "soportestv-85a2e.firebaseapp.com",
  projectId: "soportestv-85a2e",
  storageBucket: "soportestv-85a2e.appspot.com",
  messagingSenderId: "710184608482",
  appId: "1:710184608482:web:fdb5fb64eeae9e12bf74bb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);