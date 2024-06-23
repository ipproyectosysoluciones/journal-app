import { configureStore } from "@reduxjs/toolkit"; // Importamos la función configureStore de Redux Toolkit para configurar la tienda de Redux.
import { authSlice } from "./auth"; // Importamos el slice (rebanada) de auth desde el archivo auth.js.
import { journalSlice } from "./journal"; // Importamos el slice (rebanada) de journal desde el archivo journal.js.

// Configuramos la tienda de Redux.
export const store = configureStore({
  // Definimos los reducers para la tienda.
  reducer: {
    auth: authSlice.reducer, // Utilizamos el reducer del slice auth para manejar el estado de autenticación.
    journal: journalSlice.reducer, // Utilizamos el reducer del slice journal para manejar el estado del diario.
  },
});
