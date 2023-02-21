// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDGyokcjIYqQ8CTLJCzosP70uTCJ8yooRg',
  authDomain: 'portfolio-1f6fc.firebaseapp.com',
  projectId: 'portfolio-1f6fc',
  storageBucket: 'portfolio-1f6fc.appspot.com',
  messagingSenderId: '356584625176',
  appId: '1:356584625176:web:eeee399168e6d6bd919f6d',
  measurementId: 'G-YEFBTFH50V',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// const analytics = getAnalytics(app);
