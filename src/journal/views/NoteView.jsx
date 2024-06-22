import { useMemo, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Grid, TextField, Typography, IconButton } from '@mui/material';
import { SaveOutlined, UploadOutlined  } from '@mui/icons-material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';
import { setActiveNote, startSaveNote, startUploadingFiles } from '../../store/journal';


export const NoteView = () => {

  const dispatch = useDispatch();
  const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );

  const { date, body, title, onInputChange, formState } = useForm( note );

  const dateString = useMemo( () => {
    const newDate = new Date( date );

    return newDate.toUTCString();
  },[ date ]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch( setActiveNote( formState ) );
  }, [ formState ]);

  useEffect(() => {
    if ( messageSaved.length > 0 ) {
      Swal.fire( 'Updated note', messageSaved, 'success' );
    }

  }, [ messageSaved ]);
  
  const onSaveNote = () => {
    dispatch( startSaveNote() );
  };

  const onFileInputChange = ({ target }) => {
    if ( target.files.length === 0 ) return;
    
    const files = target.files;
    dispatch( startUploadingFiles( target.files ) );
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
        <Typography fontSize={ 39 } fontWeight='Light'>{ dateString }</Typography>
      </Grid>

      <Grid item>

        <input 
          type="file" 
          multiple
          ref={ fileInputRef }
          onChange={ onFileInputChange }
          style={{ display: 'none' }}
        />

        <IconButton
          color="primary"
          disabled={ isSaving }
          onClick={ () => fileInputRef.current.click() }
        >
          <UploadOutlined />
        </IconButton>
        
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

      {/* Image Gallery */}
      <ImageGallery />
    </Grid>
  );
};
