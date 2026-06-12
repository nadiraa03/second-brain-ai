import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfJUmAU1aWYyTop8Su4bh683BmmAsroCU",
  authDomain: "second-brain-ai-e3d45.firebaseapp.com",
  projectId: "second-brain-ai-e3d45",
  storageBucket: "second-brain-ai-e3d45.firebasestorage.app",
  messagingSenderId: "1092062195848",
  appId: "1:1092062195848:web:805c9165901f82609caf3d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);