import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { 
  addNewEmptyNote, 
  deleteNoteById, 
  savingNewNote, 
  setActiveNote, 
  setNotes, 
  setPhotosToActiveNote, 
  setSaving, 
  updateNote 
} from './'; // Importación de acciones de Redux.
import { fileUpload, loadNotes } from '../../helpers'; // Importación de funciones de ayuda.

export const startNewNote = () => {
  return async( dispatch, getState ) => {

    dispatch( savingNewNote() ); // Dispatch de la acción para indicar que se está guardando una nueva nota.

    // uid del usuario autenticado.
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    // Crear una nueva nota en Firestore.
    const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );
    await setDoc( newDoc, newNote );

    newNote.id = newDoc.id; // Establecer el ID de la nueva nota.

    //! dispatch
    dispatch( addNewEmptyNote( newNote ) ); // Dispatch de la acción para agregar una nueva nota vacía al estado.
    dispatch( setActiveNote( newNote ) ); // Dispatch de la acción para establecer la nueva nota como activa.
  };
};

export const startLoadingNotes = () => {
  return async( dispatch, getState ) => {

    const { uid } = getState().auth; // Obtener el UID del usuario autenticado.

    if ( !uid ) throw new Error( 'User UID does not exist' ); // Lanzar un error si el UID no existe.

    const notes = await loadNotes( uid ); // Cargar las notas del usuario desde Firestore.
    dispatch( setNotes( notes ) ); // Dispatch de la acción para establecer las notas en el estado.
  };
};

export const startSaveNote = () => {
  return async( dispatch, getState ) => {

    dispatch( setSaving() ); // Dispatch de la acción para indicar que se está guardando la nota.

    const { uid } = getState().auth; // Obtener el UID del usuario autenticado.
    const { active:note } = getState().journal; // Obtener la nota activa del estado.

    const noteToFireStore = { ...note };
    delete noteToFireStore.id; // Eliminar el ID de la nota para evitar conflictos con Firestore.

    // Actualizar la nota en Firestore.
    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
    await setDoc( docRef, noteToFireStore, { merge: true } ); // Utilizar merge para fusionar los campos existentes con los nuevos.

    dispatch( updateNote( note ) ); // Dispatch de la acción para actualizar la nota en el estado.
  };
};

export const startUploadingFiles = ( files = [] ) => {
  return async( dispatch, getState ) => {

    dispatch( setSaving() ); // Dispatch de la acción para indicar que se está guardando la nota.

    const fileUploadPromises = [];

    for ( const file of files ) {
      fileUploadPromises.push( fileUpload( file ) ); // Subir archivos a Firebase Storage.
    };

    const photoUrls = await Promise.all( fileUploadPromises ); // Obtener las URLs de las fotos subidas.
    dispatch( setPhotosToActiveNote( photoUrls ) ); // Dispatch de la acción para agregar las URLs de las fotos a la nota activa.
  };
};

export const startDeletingNote = () => {
  return async( dispatch, getState ) => {

    dispatch( setSaving() ); // Dispatch de la acción para indicar que se está guardando la nota.

    const { uid } = getState().auth; // Obtener el UID del usuario autenticado.
    const { active:note } = getState().journal; // Obtener la nota activa del estado.

    // Eliminar la nota de Firestore.
    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
    await deleteDoc( docRef );

    dispatch( deleteNoteById( note.id ) ); // Dispatch de la acción para eliminar la nota del estado.
  };
};

