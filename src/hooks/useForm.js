/* Este hook "useForm" se utiliza para gestionar el estado de un formulario y sus validaciones.
Utiliza el hook useState para almacenar el estado del formulario y las validaciones.
Utiliza el hook useEffect para crear las validaciones del formulario cuando cambia su estado.
Utiliza otro useEffect para reiniciar el formulario cuando cambia el formulario inicial.
Utiliza el hook useMemo para determinar si el formulario es válido basándose en las validaciones.
Proporciona funciones para cambiar los valores del formulario, reiniciar el formulario y verificar su validez. */

import { useState, useEffect, useMemo } from 'react'; // Importa los hooks useState, useEffect y useMemo de React

// Define el hook useForm que recibe el formulario inicial y las validaciones como argumentos
export const useForm = ( initialForm = {}, formValidations = {} ) => {

  // Define el estado del formulario y sus validaciones utilizando el hook useState
  const [ formState, setFormState ] = useState( initialForm );
  const [ formValidation, setFormValidation ] = useState({});

  // Utiliza el hook useEffect para crear las validaciones del formulario cuando cambia su estado
  useEffect(() => {
    createValidators();
  }, [ formState ]);

  // Utiliza otro useEffect para reiniciar el formulario cuando cambia el formulario inicial
  useEffect(() => {
    setFormState( initialForm );
  }, [ initialForm ]);

  // Utiliza el hook useMemo para determinar si el formulario es válido basándose en las validaciones
  const isFormValid = useMemo( () => {
    // Itera sobre todas las validaciones y verifica si alguna es falsa
    for ( const formValue of Object.keys( formValidation ) ) {
      if ( formValidation[ formValue ] !== null ) return false;
    }
    // Si todas las validaciones son nulas, el formulario es válido
    return true;
  }, [ formValidation ]); 

  // Función para manejar cambios en los campos del formulario
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // Actualiza el estado del formulario con el nuevo valor
    setFormState({
      ...formState,
      [ name ]: value,
    });
  };

  // Función para restablecer el formulario a sus valores iniciales
  const onResetForm = () => {
    setFormState( initialForm );
  };

  // Función para crear las validaciones del formulario
  const createValidators = () => {
    const formCheckedValues = {};

    // Itera sobre las validaciones y aplica las funciones de validación a cada campo del formulario
    for ( const formField of Object.keys( formValidations ) ) {
      const [ fn, errorMessage ] = formValidations[ formField ];
      formCheckedValues[ `${formField}Valid` ] = fn( formState[ formField ] ) ? null : errorMessage;
    }

    // Actualiza el estado de las validaciones del formulario
    setFormValidation( formCheckedValues );
  };

  // Devuelve el estado del formulario, las funciones para manejar cambios y restablecer el formulario, el estado de las validaciones y la validez del formulario
  return {
    ...formState, 
    formState, 
    onInputChange, 
    onResetForm, 

    ...formValidation,
    isFormValid,
  };
};