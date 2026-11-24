// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUS0_eULCWcj4aaJi6Wkt_X0zf6ABBT68",
  authDomain: "exaprogcompvioa.firebaseapp.com",
  projectId: "exaprogcompvioa",
  storageBucket: "exaprogcompvioa.firebasestorage.app",
  messagingSenderId: "846951685658",
  appId: "1:846951685658:web:fc0f774ef4261b157c7ba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };