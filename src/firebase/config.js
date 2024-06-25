// Este archivo inicializa y configura Firebase en la aplicación web.

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; // Importa la función de inicialización de Firebase
import { getAuth } from 'firebase/auth'; // Importa la función de autenticación de Firebase
import { getFirestore } from 'firebase/firestore/lite'; // Importa la función de base de datos Firestore de Firebase Lite
import { getEnvironments } from '../helpers'; // Importa la configuración del entorno

// Obtiene las variables de entorno necesarias
const { 
  VITE_API_KEY_FIREBASE,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_DATABASEURL,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET,
  VITE_MESSAGING_SENDER_ID_FIREBASE,
  VITE_APP_ID_FIREBASE,
} = getEnvironments();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev/Prod/Testing
const firebaseConfig = {
  apiKey: VITE_API_KEY_FIREBASE,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: VITE_FIREBASE_DATABASEURL,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDER_ID_FIREBASE,
  appId:   VITE_APP_ID_FIREBASE,
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp ); // Obtiene la instancia de autenticación de Firebase
export const FirebaseDB = getFirestore( FirebaseApp ); // Obtiene la instancia de base de datos Firestore de Firebase