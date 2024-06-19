// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const { API_KEY_FIREBASE, MESSAGING_SENDER_ID_FIREBASE, APP_ID_FIREBASE } = process.env
console.log( API_KEY_FIREBASE, MESSAGING_SENDER_ID_FIREBASE, APP_ID_FIREBASE );

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY_FIREBASE,
  authDomain: "journal-app-f6e24.firebaseapp.com",
  projectId: "journal-app-f6e24",
  storageBucket: "journal-app-f6e24.appspot.com",
  messagingSenderId: MESSAGING_SENDER_ID_FIREBASE,
  appId: APP_ID_FIREBASE
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );