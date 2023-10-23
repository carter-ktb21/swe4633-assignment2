// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7iBoSMSpmi9Lvf4IMfmRCBxLuXbIMM1Y",
  authDomain: "swe4633-assignment-2.firebaseapp.com",
  projectId: "swe4633-assignment-2",
  storageBucket: "swe4633-assignment-2.appspot.com",
  messagingSenderId: "498221829588",
  appId: "1:498221829588:web:86ecc292675b510e255a41",
  measurementId: "G-7R5RFG93QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, db }