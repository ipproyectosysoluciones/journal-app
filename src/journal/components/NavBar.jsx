// Importación de useDispatch desde react-redux y componentes de Material UI
import { useDispatch } from 'react-redux';
import { AppBar, Grid, Toolbar, IconButton, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
// Importación de la acción startLogout desde el store/auth
import { startLogout } from '../../store/auth';

// Componente Navbar que recibe drawerWidth como prop con un valor predeterminado de 240
export const Navbar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch(); // Hook de dispatch para despachar acciones de Redux

  // Función que se ejecuta al hacer clic en el botón de logout
  const onLogout = () => {
    dispatch( startLogout() ); // Despacha la acción de logout
  };

  return (
    // Barra de navegación AppBar
    <AppBar 
      position='fixed' 
      sx={{ 
        width: { sm: `calc( 100% - ${ drawerWidth }px )` }, // Ajusta el ancho en función del drawerWidth
        ml: { sm: `${ drawerWidth }px` } // Ajusta el margen izquierdo en función del drawerWidth
      }}
      color='primary' // Color primario del AppBar
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }} // Se muestra solo en tamaños pequeños
        >
          <MenuOutlined />
        </IconButton>

        <Grid container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h6' noWrap component='div'>JournalApp</Typography> {/* Título de la aplicación */}

          <IconButton 
            color='error'
            onClick={ onLogout } // Maneja el clic del botón de logout
          >
            <LogoutOutlined /> {/* Ícono de logout */}
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
