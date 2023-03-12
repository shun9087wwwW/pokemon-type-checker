import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiXmd0Sxc1DgxZUfptVeJuQxjNr7ZSgas",
  authDomain: "pokemon-type-checker-d76a0.firebaseapp.com",
  projectId: "pokemon-type-checker-d76a0",
  storageBucket: "pokemon-type-checker-d76a0.appspot.com",
  messagingSenderId: "977827693067",
  appId: "1:977827693067:web:640a2f13112da24e603d0e",
  measurementId: "G-9H5CPCQR1Z",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
