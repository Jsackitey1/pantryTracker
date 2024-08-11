// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALI5y8vz4Z1fIuLcVVqtVVMwrrFGCXbt4",
  authDomain: "inventory-management-app-52307.firebaseapp.com",
  projectId: "inventory-management-app-52307",
  storageBucket: "inventory-management-app-52307.appspot.com",
  messagingSenderId: "76203309503",
  appId: "1:76203309503:web:33986b7bc55d7a66df090a",
  measurementId: "G-NQ18QP0LKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


