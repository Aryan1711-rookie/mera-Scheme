
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase

// Import Firebase SDK components
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbNxatxiPA3dMFk6O5M8eIrHp58ZUm8oY",
  authDomain: "mera-scheme.firebaseapp.com",
  projectId: "mera-scheme",
  storageBucket: "mera-scheme.firebasestorage.app",
  messagingSenderId: "375503212971",
  appId: "1:375503212971:web:66399832f08ad345ba82ee"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and export it for use in the app
export const auth = getAuth(app);
export default app;

