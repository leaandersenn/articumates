"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQC81GRg2GRhXyNYJJQz5pEkTiuwWpiTk",
  authDomain: "articumate.firebaseapp.com",
  projectId: "articumate",
  storageBucket: "articumate.appspot.com",
  messagingSenderId: "621584820464",
  appId: "1:621584820464:web:513959260b66fbdc56ba35",
  measurementId: "G-QNGGFZLKYV",
};

const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
