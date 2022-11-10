import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuqs4NfDlt-mwfwzYQU9vx0bGeAf3Qu5U",
  authDomain: "clone-be93e.firebaseapp.com",
  projectId: "clone-be93e",
  storageBucket: "clone-be93e.appspot.com",
  messagingSenderId: "36799715298",
  appId: "1:36799715298:web:df1cea7212fb4ff4274bbb",
  measurementId: "G-0NXMBJD30H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth }; 