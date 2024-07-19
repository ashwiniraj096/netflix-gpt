// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAivKPmNbUiOFFSc3Q91VavmZQpqDNkGx0",
  authDomain: "netflix-gpt-f011a.firebaseapp.com",
  projectId: "netflix-gpt-f011a",
  storageBucket: "netflix-gpt-f011a.appspot.com",
  messagingSenderId: "1004812773921",
  appId: "1:1004812773921:web:54770b468decd8b4355160",
  measurementId: "G-CG1JX808TL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
