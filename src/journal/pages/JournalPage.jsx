// Importaciones necesarias desde react-redux y Material UI
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

// Importaciones de componentes personalizados
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

// Importación de la acción para crear una nueva nota
import { startNewNote } from '../../store/journal';


// Componente principal de la página del diario
export const JournalPage = () => {
  
  const dispatch = useDispatch(); // Hook para despachar acciones de Redux
  const { isSaving, active: activeNote } = useSelector( state => state.journal ); // Hook para seleccionar el estado de Redux

  // Función que se ejecuta al hacer clic en el botón para crear una nueva nota
  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    // Componente de diseño para la página del diario
    <JournalLayout>
      {
        ( !!activeNote ) // Si hay una nota activa, se muestra NoteView, de lo contrario, se muestra NothingSelectedView
          ? <NoteView />
          : <NothingSelectedView />
      }

      {/* Botón flotante para agregar una nueva nota */}
      <IconButton
        onClick={ onClickNewNote }
        disabled={ isSaving } // Deshabilitado mientras se guarda
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
