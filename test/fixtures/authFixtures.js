
export const initialState = {
  status: 'checking', // Estado inicial del estado de autenticación: 'checking', 'not-authenticated', 'authenticated'
  uid: null, // Identificador único del usuario
  email: null, // Correo electrónico del usuario
  displayName: null, // Nombre de visualización del usuario
  photoURL: null, // URL de la foto de perfil del usuario
  errorMessage: null, 
};

export const autheticatedState = {
  status: 'authenticated', // Estado inicial del estado de autenticación: 'checking', 'not-authenticated', 'authenticated'
  uid: '123ABC', // Identificador único del usuario
  email: 'juan@google.com', // Correo electrónico del usuario
  displayName: 'Juan Perez', // Nombre de visualización del usuario
  photoURL: 'https://foto.jpg', // URL de la foto de perfil del usuario
  errorMessage: null, 
};

export const notAutheticatedState = {
  status: 'not-authenticated', // Estado inicial del estado de autenticación: 'checking', 'not-authenticated', 'authenticated'
  uid: null, // Identificador único del usuario
  email: null, // Correo electrónico del usuario
  displayName: null, // Nombre de visualización del usuario
  photoURL: null, // URL de la foto de perfil del usuario
  errorMessage: null, 
};

export const demoUser = {
  uid: 'ABC123', // Identificador único del usuario
  email: 'demo@google.com', // Correo electrónico del usuario
  displayName: 'Demo User', // Nombre de visualización del usuario
  photoURL: 'https://foto.jpg', // URL de la foto de perfil del usuario
};