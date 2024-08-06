// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfF1jRXr3kFWkJdc7f-j-gCqLtkXWOmyw",
  authDomain: "bingebox-d6803.firebaseapp.com",
  projectId: "bingebox-d6803",
  storageBucket: "bingebox-d6803.appspot.com",
  messagingSenderId: "842597870879",
  appId: "1:842597870879:web:e671c9bea739f97de0542a",
  measurementId: "G-TQTKWHB9VJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//const getAuth = () => {};
export const auth = getAuth();
