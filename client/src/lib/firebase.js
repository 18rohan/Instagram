import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// import { seedDatabase } from "../seed.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMgxInn2kA5_FZe6yv9Z1-8H4aUMEx0fk",
  authDomain: "instagram-clone-0009.firebaseapp.com",
  projectId: "instagram-clone-0009",
  storageBucket: "instagram-clone-0009.appspot.com",
  messagingSenderId: "950120357450",
  appId: "1:950120357450:web:fe831b0032ec717f52d0b3",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();

const { FieldValue } = getFirestore();
const storage = getStorage(firebaseApp);
// seedDatabase(firebaseApp);
console.log(firebaseApp);
export { auth, db, provider, storage, FieldValue, firebaseApp, firestore };
