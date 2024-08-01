import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD02YHebk_alHJdLsaCKjttyCEnuO-MkSE",
  authDomain: "sozu-b530d.firebaseapp.com",
  projectId: "sozu-b530d",
  storageBucket: "sozu-b530d.appspot.com",
  messagingSenderId: "1051667198945",
  appId: "1:1051667198945:web:246779808421234555d8a0",
  measurementId: "G-BZFVZ80EP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
