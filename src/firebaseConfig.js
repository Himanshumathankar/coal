import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBbZmtV0wc5dB6LM2Y3-K19JO-L_rRDqLI",
    authDomain: "coalproject-d2990.firebaseapp.com",
    projectId: "coalproject-d2990",
    storageBucket: "coalproject-d2990.firebasestorage.app",
    messagingSenderId: "300416474098",
    appId: "1:300416474098:web:146f5eff4ba67b6d33a96b",
    measurementId: "G-JH7HSK1C2X"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
