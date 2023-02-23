// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const FIREBASE_API_KEY = 'AIzaSyDGyokcjIYqQ8CTLJCzosP70uTCJ8yooRg';
const FIREBASE_ID = 'portfolio-1f6fc';
const FIREBASE_DOMAIN = 'portfolio-1f6fc.firebaseapp.com';
const FIREBASE_BUCKET = 'portfolio-1f6fc.appspot.com';
const FIREBASE_SENDER_ID = '356584625176';
const FIREBASE_APP_ID = '1:356584625176:web:eeee399168e6d6bd919f6d';
const FIREBASE_MEASURE_ID = 'G-YEFBTFH50V';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_DOMAIN,
  projectId: FIREBASE_ID,
  storageBucket: FIREBASE_BUCKET,
  messagingSenderId: FIREBASE_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASURE_ID,
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_DOMAIN,
//   projectId: process.env.FIREBASE_ID,
//   storageBucket: process.env.FIREBASE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASURE_ID,
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
