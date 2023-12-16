// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-ae7f5.firebaseapp.com",
  projectId: "real-estate-mern-ae7f5",
  storageBucket: "real-estate-mern-ae7f5.appspot.com",
  messagingSenderId: "854497067388",
  appId: "1:854497067388:web:a4bd9e5fd9ba176802e4f9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
