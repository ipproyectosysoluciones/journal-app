// Este archivo inicializa y configura Firebase en la aplicación web.

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; // Importa la función de inicialización de Firebase
import { getAuth } from 'firebase/auth'; // Importa la función de autenticación de Firebase
import { getFirestore } from 'firebase/firestore/lite'; // Importa la función de base de datos Firestore de Firebase Lite
// import.meta.env; // Importa la configuración del entorno

// Obtiene las variables de entorno necesarias
// const API_KEY_FIREBASE = import.meta.env.VITE_API_KEY_FIREBASE;
// const AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
// const PROJECT_ID_FIREBASE = import.meta.env.VITE_PROJECT_ID_FIREBASE;
// const STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
// const MESSAGING_SENDER_ID_FIREBASE = import.meta.env.VITE_MESSAGING_SENDER_ID_FIREBASE;
// const APP_ID_FIREBASE = import.meta.env.VITE_APP_ID_FIREBASE;


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyA_4c6nohL90zRQWrTVheDvwZJ2JKXkeo0",
//   authDomain: "journal-app-f6e24.firebaseapp.com",
//   projectId: "journal-app-f6e24",
//   storageBucket: "journal-app-f6e24.appspot.com",
//   messagingSenderId: "996177653463",
//   appId: "1:996177653463:web:6d70cdae9700f14a780a92"
// };

// Testing
const firebaseConfig = {
  apiKey: "AIzaSyAVLXBJSkAndt77r0Ny0CcZB6n4QOq9pRI",
  authDomain: "listacurso-26072.firebaseapp.com",
  databaseURL: "https://listacurso-26072.firebaseio.com",
  projectId: "listacurso-26072",
  storageBucket: "listacurso-26072.appspot.com",
  messagingSenderId: "1096110261538",
  appId: "1:1096110261538:web:33808441a4327a1b0cd17b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp ); // Obtiene la instancia de autenticación de Firebase
export const FirebaseDB = getFirestore( FirebaseApp ); // Obtiene la instancia de base de datos Firestore de Firebase