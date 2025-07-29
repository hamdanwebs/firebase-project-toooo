// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC6Vw3-6DcdZdkskE8IceY-RIO_AM1G1kI",
  authDomain: "fire-base-signup-login-page1-0.firebaseapp.com",
  projectId: "fire-base-signup-login-page1-0",
  storageBucket: "fire-base-signup-login-page1-0.firebasestorage.app",
  messagingSenderId: "5059563449",
  appId: "1:5059563449:web:24d4d85d42a71e669cf068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(app);

// Firestore
const db = getFirestore(app);

// Export Auth + Firestore
export { 
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot
};
