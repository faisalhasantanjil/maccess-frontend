// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMY4-qjtCe9JXA6nqInlcZSfnyQlJNC2M",
  authDomain: "maccessory-767df.firebaseapp.com",
  projectId: "maccessory-767df",
  storageBucket: "maccessory-767df.appspot.com",
  messagingSenderId: "383590063648",
  appId: "1:383590063648:web:045850c36c648db8c6a645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app)