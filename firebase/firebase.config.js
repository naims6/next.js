// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjFOC97DoCjYE1qEOKASBMLCX6VcV2uZg",
  authDomain: "email-authantication-4ac24.firebaseapp.com",
  projectId: "email-authantication-4ac24",
  storageBucket: "email-authantication-4ac24.firebasestorage.app",
  messagingSenderId: "117415527085",
  appId: "1:117415527085:web:14f42f8935c0c4c618bc24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
