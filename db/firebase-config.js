import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import db from "./seed.js"

const firebaseConfig = {
  apiKey: "AIzaSyBiw8WB6BSGq5FSsAptc5jwtHZcBf7W1X8",
  authDomain: "e-commerce-f4205.firebaseapp.com",
  projectId: "e-commerce-f4205",
  storageBucket: "e-commerce-f4205.appspot.com",
  messagingSenderId: "231200775930",
  appId: "1:231200775930:web:04c5abedd4e1605ab8f343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
