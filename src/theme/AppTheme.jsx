import CssBaseline from '@mui/material/CssBaseline'; // Importamos el componente CssBaseline de Material-UI para restablecer los estilos predeterminados del navegador.
import { ThemeProvider } from '@mui/material/styles'; // Importamos el componente ThemeProvider de Material-UI para proporcionar el tema a toda la aplicación.

import { purpleTheme } from './'; // Importamos el tema personalizado purpleTheme definido en otro archivo.

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline /> {/* Componente que establece un conjunto básico de estilos para la aplicación, proporcionando una base consistente. */}
      { children } {/* Renderiza los componentes hijos que se pasan como prop. */}
    </ThemeProvider>
  );
};
