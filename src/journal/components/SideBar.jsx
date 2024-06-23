// Importaciones necesarias desde React Redux y Material UI
import { useSelector } from 'react-redux';
import { 
  Box, 
  Divider, 
  Drawer, 
  List,
  Toolbar, 
  Typography 
} from '@mui/material';
// Importación del componente SideBarItem
import { SideBarItem } from '.';

// Componente funcional Sidebar que recibe props
export const Sidebar = ({ drawerWidth = 240 }) => {

  // Hook de Redux para seleccionar el estado actual del auth y journal
  const { displayName } = useSelector( state => state.auth ); 
  const { notes } = useSelector( state => state.journal );

  return (
    <Box
      component={'nav'}
      sx={{ 
        width: { sm: drawerWidth }, 
        flexShrink: { sm: 0 } 
      }}
    >
      <Drawer
        variant='permanent' // El cajón será permanente
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth 
          }
        }}
      >
        <Toolbar>
          <Typography 
            variant='h6' 
            noWrap 
            component={'div'}
          >
            { displayName } {/* Muestra el nombre de usuario */}
          </Typography>
        </Toolbar>

        <Divider /> {/* Separador visual */}

        <List>
          {
            // Mapea las notas y las renderiza usando el componente SideBarItem
            notes.map( note => (
              <SideBarItem key={ note.id } { ...note } />
            ))
            
          }
        </List>
      </Drawer>
    </Box>
  );
};
