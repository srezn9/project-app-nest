// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ27MvEHjP-ij9D9DVED0iDyXmBSOb_p8",
  authDomain: "my-assignment-09-6ab90.firebaseapp.com",
  projectId: "my-assignment-09-6ab90",
  storageBucket: "my-assignment-09-6ab90.firebasestorage.app",
  messagingSenderId: "681378130919",
  appId: "1:681378130919:web:47b8330b84adcf9d6eab42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;