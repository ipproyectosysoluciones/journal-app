// Importamos la función createTheme desde @mui/material/styles para crear un tema personalizado.
import { createTheme } from '@mui/material/styles';
// Importamos el color rojo desde @mui/material/colors para utilizarlo en la paleta de errores.
import { red } from '@mui/material/colors';

// Creamos un tema personalizado llamado purpleTheme.
export const purpleTheme = createTheme({
  // Definimos la paleta de colores del tema.
  palette: {
    // Colores primarios.
    primary: {
      // Color principal para el tema primario.
      main: '#262254', // Un tono púrpura oscuro.
    },
    // Colores secundarios.
    secondary: {
      // Color principal para el tema secundario.
      main: '#543884', // Un tono púrpura más claro.
    },
    // Colores para los mensajes de error.
    error: {
      // Color principal para los errores.
      main: red.A400, // Un tono rojo brillante.
    }
  },
});
