// Importaciones de hooks y utilidades necesarias desde React y otras librerías
import { useMemo, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Importaciones de componentes de Material UI y SweetAlert2
import { Button, Grid, TextField, Typography, IconButton } from '@mui/material';
import { DeleteOutline, SaveOutlined, UploadOutlined  } from '@mui/icons-material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

// Importaciones de hooks personalizados y acciones de Redux
import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';

// Componente NoteView
export const NoteView = () => {

  const dispatch = useDispatch(); // Hook para despachar acciones de Redux
  const { active:note, messageSaved, isSaving } = useSelector( state => state.journal ); // Hook para acceder al estado de Redux

  const { date, body, title, onInputChange, formState } = useForm( note ); // Hook personalizado para manejar formularios

  // Memoiza la conversión de la fecha para evitar recalcular en cada renderizado
  const dateString = useMemo( () => {
    const newDate = new Date( date );
    return newDate.toUTCString();
  },[ date ]);

  const fileInputRef = useRef(); // Referencia al input de archivos

  // Efecto para actualizar la nota activa en el store cada vez que cambie el estado del formulario
  useEffect(() => {
    dispatch( setActiveNote( formState ) );
  }, [ formState ]);

  // Efecto para mostrar una alerta cuando se guarda un mensaje
  useEffect(() => {
    if ( messageSaved.length > 0 ) {
      Swal.fire( 'Updated note', messageSaved, 'success' );
    }
  }, [ messageSaved ]);

  // Función para guardar la nota actual
  const onSaveNote = () => {
    dispatch( startSaveNote() );
  };

  // Función para manejar el cambio de archivos en el input
  const onFileInputChange = ({ target }) => {
    if ( target.files.length === 0 ) return;
    const files = target.files;
    dispatch( startUploadingFiles( target.files ) );
  };

  // Función para eliminar la nota actual
  const onDelete = () => {
    dispatch( startDeletingNote() );
  };
  
  return (
    <Grid 
      container 
      direction='row' 
      justifyContent='space-between'
      alignItems='center'
      sx={{
        mb: 1
      }}
      className='animate__animated animate__fadeIn animate__faster'
    >
      <Grid item>
        {/* Muestra la fecha de la nota */}
        <Typography fontSize={ 39 } fontWeight='Light'>{ dateString }</Typography>
      </Grid>

      <Grid item>
        {/* Input para seleccionar archivos, oculto por defecto */}
        <input 
          type="file" 
          multiple
          ref={ fileInputRef }
          onChange={ onFileInputChange }
          style={{ display: 'none' }}
        />

        {/* Botón para subir archivos */}
        <IconButton
          color="primary"
          disabled={ isSaving }
          onClick={ () => fileInputRef.current.click() }
        >
          <UploadOutlined />
        </IconButton>
        
        {/* Botón para guardar la nota */}
        <Button 
          disabled={ isSaving }
          onClick={ onSaveNote }
          color='primary' 
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        {/* Campo de texto para el título de la nota */}
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          placeholder='Enter a title'
          label='Title'
          sx={{
            border: 'none',
            mb: 1
          }}
          name='title'
          value={ title }
          onChange={ onInputChange }
        />

        {/* Campo de texto para el cuerpo de la nota */}
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='What happened today?'
          label='Description'
          minRows={ 5 }
          name='body'
          value={ body }
          onChange={ onInputChange }
        />
      </Grid>

      <Grid container justifyContent="end">
        {/* Botón para eliminar la nota */}
        <Button
          onClick={ onDelete }
          sx={{ mt: 2 }}
          color='error'
        >
          <DeleteOutline />
          Delete
        </Button>
      </Grid>

      {/* Image Gallery */}
      <ImageGallery images={ note.imageUrls } />
    </Grid>
  );
};
