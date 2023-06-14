import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb66zlnNzF4cDhgeV5gZXE_GttmHkkMnM",
  authDomain: "next-coffee-guide-ec085.firebaseapp.com",
  projectId: "next-coffee-guide-ec085",
  storageBucket: "next-coffee-guide-ec085.appspot.com",
  messagingSenderId: "279505906773",
  appId: "1:279505906773:web:17907c9af3d717e20ff8dc",
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const storage = getStorage(app);
