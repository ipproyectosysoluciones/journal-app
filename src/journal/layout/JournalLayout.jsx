import { Box, Toolbar } from '@mui/material'; // Importaciones necesarias desde Material UI
import { Navbar, Sidebar } from '../components'; // Importaciones de los componentes personalizados Navbar y Sidebar

// Definición del ancho del drawer (barra lateral)
const drawerWidth = 240;

// Componente de diseño principal para la aplicación
export const JournalLayout = ({ children }) => {
  return (
    // Caja principal que utiliza flexbox para el diseño
    <Box 
      sx={{ display: 'flex' }} // Configuración de flexbox
      className='animate__animated animate__fadeIn animate__faster' // Clases para animaciones
    >
      {/* Componente de la barra de navegación, se le pasa el ancho del drawer como prop */}
      <Navbar drawerWidth={ drawerWidth } />
      {/* Componente de la barra lateral, se le pasa el ancho del drawer como prop */}
      <Sidebar drawerWidth={ drawerWidth } />

      {/* Caja principal donde se renderiza el contenido principal */}
      <Box 
        component='main'
        sx={{ flexGrow: 1, p: 3 }} // Crecimiento flexible y padding
      >
        <Toolbar /> {/* Añade espacio para la barra de herramientas */}
        {/* Renderiza los hijos pasados como prop al componente */}
        { children }
      </Box>
    </Box>
  );
};

