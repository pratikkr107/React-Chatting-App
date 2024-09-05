import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyDStl5ffWFXjH1MCAwYMj-PD268uk0T3jo",
    authDomain: "chat-app-1201a.firebaseapp.com",
    projectId: "chat-app-1201a",
    storageBucket: "chat-app-1201a.appspot.com",
    messagingSenderId: "219795597787",
    appId: "1:219795597787:web:ec845ad4f5e9b083491ffe",
    measurementId: "G-H89T7DJGMM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
export const provider = new GoogleAuthProvider();
