import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth', // Nombre del slice
  initialState: {
    status: 'checking', // Estado inicial del estado de autenticación: 'checking', 'not-authenticated', 'authenticated'
    uid: null, // Identificador único del usuario
    email: null, // Correo electrónico del usuario
    displayName: null, // Nombre de visualización del usuario
    photoURL: null, // URL de la foto de perfil del usuario
    errorMessage: null, // Mensaje de error en caso de fallo de autenticación
  },
  reducers: {
    login: ( state, { payload } ) => {
      state.status = 'authenticated'; // Cambia el estado a 'authenticated'
      state.uid = payload.uid; // Establece el UID del usuario
      state.email = payload.email; // Establece el correo electrónico del usuario
      state.displayName = payload.displayName; // Establece el nombre de visualización del usuario
      state.photoURL = payload.photoURL; // Establece la URL de la foto de perfil del usuario
      state.errorMessage = null; // Reinicia el mensaje de error
    },
    logout: ( state, { payload } ) => {
      state.status = 'not-authenticated'; // Cambia el estado a 'not-authenticated'
      state.uid = null; // Reinicia el UID
      state.email = null; // Reinicia el correo electrónico
      state.displayName = null; // Reinicia el nombre de visualización
      state.photoURL = null; // Reinicia la URL de la foto de perfil
      state.errorMessage = payload?.errorMessage; // Establece el mensaje de error si se proporciona
    },
    checkingCredentials: ( state ) => {
      state.status = 'checking'; // Cambia el estado a 'checking'
    },
  }
});


// Action creators are generated for each case reducer function
export const { checkingCredentials, login, logout } = authSlice.actions; // Exporta las acciones creadas automáticamente