// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, child } from "firebase/database";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';


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
class Firebase {
    constructor() {
        initializeApp(config);
        this.auth = getAuth();
        this.db = getDatabase();
    }

    // *** Auth API **
    doCreateUserWithEmailAndPassword = (email, password) => 
        createUserWithEmailAndPassword(this.auth, email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        signInWithEmailAndPassword(this.auth, email, password);

    doSignOut = () => signOut(this.auth);

    userRef = uid => ref(this.db, `users/${uid}`);
    key = (path) => push(child(this.db, path)).key;

} 

export default Firebase;
