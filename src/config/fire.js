// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyBE5tsHi8aMjmPv2WUIGYKUfScHdes9Cfs",
  authDomain: "budgetapp-a07a7.firebaseapp.com",
  databaseUrl: "https://budgetapp-a07a7-default-rtdb.firebaseio.com",
  projectId: "budgetapp-a07a7",
  storageBucket: "budgetapp-a07a7.appspot.com",
  messagingSenderId: "385573250253",
  appId: "1:385573250253:web:bd8b5e2d3c91b0b6e53584",
  measurementId: "G-6KC97GYRDE"
};

// Initialize Firebase
const Firebase = initializeApp(config);
// Initialize variables
const auth = getAuth();
const database = getDatabase();


export {auth, database, Firebase};