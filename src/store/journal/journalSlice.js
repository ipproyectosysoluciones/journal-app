import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
    /* active: {
      id: 'ABC123',
      title: '',
      body: '',
      date: '123456',
      imageUrls: [] // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg,
    }, */
  },
  reducers: {
    savingNewNote: ( state ) => {
      state.isSaving = true;
    },
    addNewEmptyNote: ( state, action ) => {
      state.notes.push( action.payload );
      state.isSaving = false;
    },
    setActiveNote: ( state, action ) => {
      state.active = action.payload;
      state.messageSaved = '';
    },
    setNotes: ( state, action ) => {
      state.notes = action.payload;
    },
    setSaving: ( state ) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: ( state, action ) => {
      state.isSaving = false;
      state.notes = state.notes.map( note => ( 
        note.id === action.payload.id )
          ? action.payload 
          : note 
      );
      state.messageSaved = `${ action.payload.title }, successfully updated`;
    },
    deleteNoteById: ( state, action ) => {
      
    }
  }
});


// Action creators are generated for each case reducer function
export const { 
  addNewEmptyNote, 
  deleteNoteById, 
  setSaving, 
  savingNewNote,
  setActiveNote, 
  setNotes, 
  updateNote, 
} = journalSlice.actions;