import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB6-l7pppyo60MwV_RCSgUD917T5lWiwMQ",
  authDomain: "auth-page-44750.firebaseapp.com",
  projectId: "auth-page-44750",
  storageBucket: "auth-page-44750.appspot.com",
  messagingSenderId: "350099517930",
  appId: "1:350099517930:web:4d818493399fdccf57c293",
  measurementId: "G-P4VSG3SS1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth};