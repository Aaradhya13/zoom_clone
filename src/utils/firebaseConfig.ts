import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "zoom-clone-ae064.firebaseapp.com",
  projectId: "zoom-clone-ae064",
  storageBucket: "zoom-clone-ae064.firebasestorage.app",
  messagingSenderId: "886468767306",
  appId: "1:886468767306:web:93add8819a4bfe79e3c0b3",
  measurementId: "G-823K293WLW",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
