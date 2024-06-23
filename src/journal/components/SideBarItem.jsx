// Importaciones necesarias desde React y Redux
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
// Importaciones necesarias desde Material UI
import { 
  Grid, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
} from '@mui/material';
// Importación del icono de Material UI
import { TurnedInNot } from '@mui/icons-material';
// Importación de la acción setActiveNote
import { setActiveNote } from '../../store/journal';

// Componente funcional SideBarItem que recibe props
export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch(); // Hook de Redux para despachar acciones

  // Función que se ejecuta al hacer clic en la nota
  const onClickNote = () => {
    dispatch( setActiveNote({ title, body, id, date, imageUrls }) ); // Despacha la acción setActiveNote con la información de la nota
  };

  // Memoriza el title nuevo para evitar recálculos innecesarios
  const newTitle = useMemo( () => {
    // Si el título es mayor a 17 caracteres, lo recorta y añade "..."
    return title.length > 17
     ? title.substring( 0, 17 ) + '...'
     : title;
  },[ title ]);

  // Memoriza el body nuevo para evitar recálculos innecesarios
  const newBody = useMemo( () => {
    // Si el cuerpo es mayor a 25 caracteres, lo recorta y añade "..."
    return body.length > 25
     ? body.substring( 0, 25 ) + '...'
     : body;
  },[ body ]);

  // Retorno del componente JSX
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={ onClickNote }>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>

        <Grid container>
          <ListItemText primary={ newTitle } />
          <ListItemText secondary={ newBody } />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
