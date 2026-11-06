import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1xpROlkWs_A-a77syWDGURflkhIQEchI",
  authDomain: "auth-acess-project.firebaseapp.com",
  projectId: "auth-acess-project",
  storageBucket: "auth-acess-project.firebasestorage.app",
  messagingSenderId: "785641783639",
  appId: "1:785641783639:web:70dfc0a19eb992344ffe12",
  measurementId: "G-JY6C8W5T4M"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };