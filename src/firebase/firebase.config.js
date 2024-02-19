import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDAbZWOKWLQ10E1CInh_Cs9aNecfu2cVXw",
    authDomain: "alex-e660d.firebaseapp.com",
    projectId: "alex-e660d",
    storageBucket: "alex-e660d.appspot.com",
    messagingSenderId: "790835622550",
    appId: "1:790835622550:web:418bc255ef39458ca7c8b7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)