import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBQ-NbnzszRiVsvnoRvpvibXac0tgJdBxo',
  authDomain: 'portfolio-f7e60.firebaseapp.com',
  projectId: 'portfolio-f7e60',
  storageBucket: 'portfolio-f7e60.appspot.com',
  messagingSenderId: '129662105169',
  appId: '1:129662105169:web:34915e09acf3078f336a70',
  measurementId: 'G-9V4VFFYL1K',
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
