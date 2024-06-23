// Este archivo se encarga de cargar las notas de un usuario desde Firestore.

import { collection, getDocs } from 'firebase/firestore/lite'; // Importa funciones para acceder a Firestore
import { FirebaseDB } from '../firebase/config'; // Importa la instancia de la base de datos de Firebase

export const loadNotes = async( uid = '' ) => {
  // Esta función asincrónica carga las notas de un usuario desde Firestore

  if ( !uid ) throw new Error( 'User UID does not exist' ); // Si no se proporciona un UID de usuario, lanza un error

  const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` ); // Obtiene la referencia a la colección de notas del usuario
  const docs = await getDocs( collectionRef ); // Obtiene los documentos de la colección

  const notes = []; // Array para almacenar las notas
  // Recorre cada documento y lo agrega al array de notas
  docs.forEach( doc => {
    notes.push({ 
      id: doc.id, // ID del documento
      ...doc.data() // Datos del documento
    });
  });
  
  return notes; // Devuelve el array de notas cargadas desde Firestore
};