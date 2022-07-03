// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-8TtO7Qj7AQvR3GvC9GD8loFJigE0awA",
  authDomain: "contact-form-1b028.firebaseapp.com",
  databaseURL: "https://contact-form-1b028-default-rtdb.firebaseio.com",
  projectId: "contact-form-1b028",
  storageBucket: "contact-form-1b028.appspot.com",
  messagingSenderId: "1037313209519",
  appId: "1:1037313209519:web:812cb33c752c5360a6d05a",
  measurementId: "G-LTXLR7T67J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const database = getDatabase(app);
