import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal', // Define el nombre del slice de Redux.
  initialState: {
    isSaving: false, // Estado inicial para indicar si se está guardando una nota.
    messageSaved: '', // Mensaje para indicar si se guardó exitosamente una nota.
    notes: [], // Array que almacena las notas.
    active: null, // Nota activa actualmente seleccionada.
    /* active: { // Ejemplo de estructura de nota activa.
      id: 'ABC123',
      title: '',
      body: '',
      date: '123456',
      imageUrls: [] // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg,
    }, */
  },
  reducers: {
    savingNewNote: ( state ) => {
      state.isSaving = true; // Actualiza el estado para indicar que se está guardando una nueva nota.
    },
    addNewEmptyNote: ( state, action ) => {
      state.notes.push( action.payload ); // Agrega una nueva nota vacía al array de notas.
      state.isSaving = false; // Actualiza el estado para indicar que se ha completado el guardado de la nota.
    },
    setActiveNote: ( state, action ) => {
      state.active = action.payload; // Establece la nota activa seleccionada.
      state.messageSaved = ''; // Limpia el mensaje de guardado.
    },
    setNotes: ( state, action ) => {
      state.notes = action.payload; // Establece las notas en el estado.
    },
    setSaving: ( state ) => {
      state.isSaving = true; // Actualiza el estado para indicar que se está guardando.
      state.messageSaved = ''; // Limpia el mensaje de guardado.
    },
    updateNote: ( state, action ) => {
      state.isSaving = false; // Actualiza el estado para indicar que se ha completado el guardado de la nota.
      state.notes = state.notes.map( note => ( 
        note.id === action.payload.id )
          ? action.payload 
          : note 
      ); // Actualiza la nota en el array de notas.
      state.messageSaved = `${ action.payload.title }, successfully updated`; // Establece el mensaje de guardado.
    },
    setPhotosToActiveNote: ( state, action ) => {
      state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];  // Agrega URLs de imágenes a la nota activa.
      state.isSaving = false; // Actualiza el estado para indicar que se ha completado el guardado de la nota.
    },
    clearNotesLogout: ( state ) => {
      state.isSaving = false; // Restablece el estado de guardado.
      state.messageSaved = ''; // Limpia el mensaje de guardado.
      state.notes = []; // Limpia el array de notas.
      state.active = null; // Restablece la nota activa
    },
    deleteNoteById: ( state, action ) => {
      state.active = null; // Limpia la nota activa.
      state.notes = state.notes.filter( note => note.id !== action.payload ); // Filtra las notas eliminando la que coincide con el id proporcionado.
    }
  }
});


// Action creators are generated for each case reducer function
export const { 
  addNewEmptyNote, 
  clearNotesLogout, 
  deleteNoteById, 
  savingNewNote,
  setActiveNote, 
  setNotes, 
  setPhotosToActiveNote,
  setSaving, 
  updateNote, 
} = journalSlice.actions; // Exporta los action creators generados automáticamente para cada función reductora de caso.