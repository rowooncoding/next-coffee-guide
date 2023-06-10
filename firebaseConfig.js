// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb66zlnNzF4cDhgeV5gZXE_GttmHkkMnM",
  authDomain: "next-coffee-guide-ec085.firebaseapp.com",
  projectId: "next-coffee-guide-ec085",
  storageBucket: "next-coffee-guide-ec085.appspot.com",
  messagingSenderId: "279505906773",
  appId: "1:279505906773:web:17907c9af3d717e20ff8dc",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const firestore = firebase.firestore();
