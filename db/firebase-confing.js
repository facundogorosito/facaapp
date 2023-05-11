import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-5x5KOZNM58dRDH7VL6TqqpKl4gWPkFA",
    authDomain: "facaapp-71a4b.firebaseapp.com",
    projectId: "facaapp-71a4b",
    storageBucket: "facaapp-71a4b.appspot.com",
    messagingSenderId: "359567600741",
    appId: "1:359567600741:web:378a1913664ef13dabea8c"
  };  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;