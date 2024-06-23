import { 
  loginWithEmailPassword, // Importa la función para iniciar sesión con correo electrónico y contraseña
  logoutFirebase, // Importa la función para cerrar sesión de Firebase
  registerUserWithEmailPassword, // Importa la función para registrar un usuario con correo electrónico y contraseña
  signInWithGoogle // Importa la función para iniciar sesión con Google
} from '../../firebase/providers'; // Importa los proveedores de autenticación de Firebase
import { clearNotesLogout } from '../journal'; // Importa la acción para limpiar las notas al cerrar sesión
import { checkingCredentials, login, logout } from './'; // Importa las acciones relacionadas con la autenticación


export const checkingAuthentication = ( email, password ) => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() ); // Despacha la acción para indicar que se están verificando las credenciales
  };
};

export const startGoogleSignIn = () => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() ); // Despacha la acción para indicar que se están verificando las credenciales

    const result = await signInWithGoogle(); // Inicia sesión con Google
    if ( !result.ok ) return dispatch( logout( result.errorMessage ) ); // Si hay un error, cierra sesión con el mensaje de error proporcionado

    dispatch( login( result ) ); // Inicia sesión exitosamente con los datos del usuario obtenidos
  };
};


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() ); // Despacha la acción para indicar que se están verificando las credenciales

    const result = await registerUserWithEmailPassword({ email, password, displayName }); // Registra un nuevo usuario con correo electrónico y contraseña
    
    if ( !result.ok ) return dispatch( logout( result.errorMessage ) ); // Si hay un error, cierra sesión con el mensaje de error proporcionado

    dispatch( login( result ) ); // Inicia sesión exitosamente con los datos del usuario registrado
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() ); // Despacha la acción para indicar que se están verificando las credenciales

    const result = await loginWithEmailPassword({ email, password }); // Inicia sesión con correo electrónico y contraseña
    
    if ( !result.ok ) return dispatch( logout( result ) ); // Si hay un error, cierra sesión con el mensaje de error proporcionado

    dispatch( login( result ) ); // Inicia sesión exitosamente con los datos del usuario obtenidos
  };
};


export const startLogout = () => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() ); // Despacha la acción para indicar que se están verificando las credenciales
    
    const result = await logoutFirebase(); // Cierra sesión de Firebase

    if ( !result.ok ) return dispatch( logout( result.errorMessage ) ); // Si hay un error, cierra sesión con el mensaje de error proporcionado
    dispatch( clearNotesLogout() ); // Limpia las notas al cerrar sesión
    dispatch( logout( result ) ); // Cierra sesión exitosamente
  };
};