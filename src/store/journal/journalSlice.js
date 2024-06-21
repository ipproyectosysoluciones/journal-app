import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    messageSend: '',
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
    addNewEmptyNote: ( state, action ) => {
      
    },
    setActiveNote: ( state, action ) => {
      
    },
    setNotes: ( state, action ) => {
      
    },
    saveSaving: ( state ) => {
      
    },
    updateNote: ( state, action ) => {
      
    },
    deleteNoteById: ( state, action ) => {
      
    }
  }
});


// Action creators are generated for each case reducer function
export const { 
  addNewEmptyNote, 
  deleteNoteById, 
  saveSaving, 
  setActiveNote, 
  setNotes, 
  updateNote, 
} = journalSlice.actions;