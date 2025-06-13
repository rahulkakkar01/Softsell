import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkQKHjcyGD2bGjvJj-j2xJ8pVUnY76sQo",
  authDomain: "softsell-3db56.firebaseapp.com",
  projectId: "softsell-3db56",
  storageBucket: "softsell-3db56.firebasestorage.app",
  messagingSenderId: "746786633908",
  appId: "1:746786633908:web:67b126dcf132f7da053fe1",
  measurementId: "G-3HLSC3DVH8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();