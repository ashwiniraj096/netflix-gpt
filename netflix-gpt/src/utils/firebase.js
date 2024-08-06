// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFRfK_73wZgsidbPiwZESkBW2Mej3lkec",
  authDomain: "bingebox-f790d.firebaseapp.com",
  projectId: "bingebox-f790d",
  storageBucket: "bingebox-f790d.appspot.com",
  messagingSenderId: "307291446874",
  appId: "1:307291446874:web:3ac7a213b0a6568ff70263",
  measurementId: "G-4M9JD2DKKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
