import { AppRouter } from "./router/AppRouter"; // Importamos AppRouter que maneja todas las rutas de la aplicación.
import { AppTheme } from './theme'; // Importamos AppTheme que aplica los temas personalizados de MUI a la aplicación.

// Definimos el componente principal de la aplicación, JournalApp
export const JournalApp = () => {
  return (
    <AppTheme>
      {/* AppRouter se encarga de renderizar los diferentes componentes según la ruta actual. */}
      <AppRouter />
    </AppTheme>
  );
};
