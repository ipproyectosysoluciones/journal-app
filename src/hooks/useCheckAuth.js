/*  Este hook "useCheckAuth" se utiliza para verificar el estado de autenticación del usuario.
 Utiliza el hook useEffect para ejecutar la verificación de autenticación una vez que el componente se ha montado.
 Se suscribe al estado de autenticación utilizando la función "onAuthStateChanged" de Firebase Auth para detectar cambios en el estado de autenticación del usuario.
 Si el usuario no está autenticado, se despacha una acción de logout.
 Si el usuario está autenticado, se despacha una acción de login con la información del usuario y se inicia la carga de las notas del diario.
 Devuelve el estado de autenticación actual. */


import { useEffect } from 'react'; // Importa el hook useEffect de React
import { onAuthStateChanged } from 'firebase/auth'; // Importa la función onAuthStateChanged de Firebase Auth
import { useSelector, useDispatch } from 'react-redux'; // Importa los hooks useSelector y useDispatch de react-redux

import { FirebaseAuth } from '../firebase/config'; // Importa la configuración de Firebase Auth

import { login, logout } from '../store/auth'; // Importa las acciones de login y logout del almacenamiento
import { startLoadingNotes } from '../store/journal'; // Importa la acción de inicio de carga de notas del diario del almacenamiento


// Define el hook useCheckAuth
export const useCheckAuth = () => {
  
  // Obtiene el estado de autenticación del almacenamiento utilizando el hook useSelector
  const { status } = useSelector( state => state.auth );
  // Obtiene la función dispatch del almacenamiento utilizando el hook useDispatch
  const dispatch = useDispatch();

  // Usa el hook useEffect para realizar la verificación de autenticación cuando el componente se monta
  useEffect(() => {
    // Suscribe una función al cambio de estado de autenticación del usuario utilizando la función onAuthStateChanged de Firebase Auth
    onAuthStateChanged( FirebaseAuth, async( user ) => {
      // Si el usuario no está autenticado, despacha una acción de logout
      if ( !user ) return dispatch( logout() );

      // Si el usuario está autenticado, obtiene su información y despacha una acción de login con esa información
      const { displayName, email, photoURL, uid } = user;
      dispatch( login({ displayName, email, photoURL, uid }) );
      // Inicia la carga de las notas del diario despachando la acción correspondiente
      dispatch( startLoadingNotes() );
    });
  // El useEffect se ejecuta solo una vez después del montaje del componente, por lo que se pasa un array vacío como segundo argumento para que no se ejecute de nuevo en actualizaciones
  }, []);

  // Devuelve el estado de autenticación actual
  return status;
};
