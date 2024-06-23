// Este archivo proporciona funciones para la autenticación de usuarios utilizando Firebase Auth.

import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword,
  signInWithPopup, 
  updateProfile 
} from 'firebase/auth'; // Importa funciones de autenticación de Firebase
import { FirebaseAuth } from './config'; // Importa la instancia de Firebase Auth

const googleProvider = new GoogleAuthProvider(); // Proveedor de autenticación de Google

export const signInWithGoogle = async() => {
  // Esta función permite iniciar sesión con Google mediante Firebase Auth

  try {
    const result = await signInWithPopup( FirebaseAuth, googleProvider ); // Inicia sesión con una ventana emergente de Google
    const { displayName, email, photoURL, uid } = result.user; // Obtiene información del usuario

    return {
      ok: true,
      // User info
      displayName,
      email,
      photoURL,
      uid,
    };

  } catch ( error ) {

    const errorCode = error.code;
    const errorMessage = error.message; // Obtiene el mensaje de error

    return {
      ok: false,
      errorMessage,
    };
  };
};

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
  // Esta función registra un nuevo usuario con correo electrónico y contraseña

  try {

    const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password ); // Crea un nuevo usuario
    const { uid, photoURL } = resp.user; // Obtiene la información del usuario

    await updateProfile( FirebaseAuth.currentUser, { displayName } ); // Actualiza el perfil del usuario con el nombre de visualización

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    }

  } catch ( error ) {
    // console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  };
};

export const loginWithEmailPassword = async({ email, password }) => {
  // Esta función inicia sesión con correo electrónico y contraseña

  //! signInWithEmailAndPassword
  try {
    const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password ); // Inicia sesión con correo electrónico y contraseña

    const { displayName, photoURL, uid } = resp.user; // Obtiene la información del usuario
    return {
      ok: true,
      displayName,
      photoURL,
      uid,
    }
  } catch ( error ) {
    // console.log( error );

    return {
      ok: false,
      errorMessage: error.message,
    };
  };
};

export const logoutFirebase = async() => {
  // Esta función cierra la sesión del usuario

  try {
    await FirebaseAuth.signOut(); // Cierra sesión
    return {
      ok: true,
    };
  } catch ( error ) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  };
};