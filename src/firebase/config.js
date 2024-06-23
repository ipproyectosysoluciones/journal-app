// Este archivo inicializa y configura Firebase en la aplicación web.

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; // Importa la función de inicialización de Firebase
import { getAuth } from 'firebase/auth'; // Importa la función de autenticación de Firebase
import { getFirestore } from 'firebase/firestore/lite'; // Importa la función de base de datos Firestore de Firebase Lite
import.meta.env; // Importa la configuración del entorno

// Obtiene las variables de entorno necesarias
const API_KEY_FIREBASE = import.meta.env.VITE_API_KEY_FIREBASE;
// const AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
// const PROJECT_ID_FIREBASE = import.meta.env.VITE_PROJECT_ID_FIREBASE;
// const STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID_FIREBASE = import.meta.env.VITE_MESSAGING_SENDER_ID_FIREBASE;
const APP_ID_FIREBASE = import.meta.env.VITE_APP_ID_FIREBASE;


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
export const FirebaseAuth = getAuth( FirebaseApp ); // Obtiene la instancia de autenticación de Firebase
export const FirebaseDB = getFirestore( FirebaseApp ); // Obtiene la instancia de base de datos Firestore de Firebase