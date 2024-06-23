// Importaciones de componentes y funciones necesarios para el componente RegisterPage
import { useState, useMemo } from 'react'; // Importa useState y useMemo para manejar el estado y memoizar valores
import { useDispatch, useSelector } from 'react-redux'; // Importa useDispatch y useSelector para manejar el estado global de Redux
import { Link as RouterLink } from 'react-router-dom'; // Importa Link de react-router-dom para la navegación
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'; // Importa componentes de Material-UI
import { AuthLayout } from '../layout/AuthLayout'; // Importa el componente AuthLayout para el diseño de autenticación
import { useForm } from '../../hooks/useForm'; // Importa el hook useForm para el manejo de formularios
import { startCreatingUserWithEmailPassword } from '../../store/auth'; // Importa acciones de autenticación desde el store de Redux

// Define los campos iniciales del formulario de registro y las validaciones
const formData = {
  displayName: '',
  email: '',
  password: '',
}

const formValidations = {
  displayName: [(value) => value.trim().length > 1, 'Full name is required'],
  email: [(value) => value.includes('@'), 'The email must have an @'],
  password: [(value) => value.length >= 6, 'Password must be at least 6 characters long'],
};

// Definición del componente RegisterPage
export const RegisterPage = () => {

  const dispatch = useDispatch(); // Obtiene la función dispatch para despachar acciones a Redux
  const [ formSubmitted, setFormSubmitted ] = useState( false ); // Estado para controlar si el formulario ha sido enviado

  // Obtiene el estado de autenticación y el mensaje de error desde el store de Redux
  const { status, errorMessage } = useSelector( state => state.auth );
  // Determina si el usuario está en proceso de autenticación
  const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ] );

  // Utiliza el hook useForm para manejar los campos del formulario y las validaciones
  const { 
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm( formData, formValidations );

  // Función para manejar el envío del formulario de registro
  const onSubmit = ( event ) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del evento
    setFormSubmitted( true ); // Marca el formulario como enviado

    if ( !isFormValid ) return; // Si el formulario no es válido, no hace nada
    dispatch( startCreatingUserWithEmailPassword( formState ) ); // Despacha la acción de creación de usuario con email y contraseña
  };

  // Renderiza el componente RegisterPage
  return (
    <AuthLayout title="Crear Cuenta"> {/* Renderiza el componente AuthLayout con el título "Crear Cuenta" */}

      <form 
        onSubmit={ onSubmit } // Maneja el envío del formulario
        className='animate__animated animate__fadeIn animate__faster' // Agrega clases para animación
      >
        <Grid container>
          {/* Campos de entrada para el nombre completo, el email y la contraseña */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Enter your full name"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
            />
            {/* Muestra un mensaje de error si hay uno */}
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid 
                item 
                xs={12}
                display={ !!errorMessage ? '' : 'none' }
              >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>

              <Grid item xs={12}>
                <Button 
                  disabled={ isCheckingAuthentication }
                  type="submit"
                  variant="contained" 
                  fullWidth
                >
                  Create Account
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Enlace para redirigir a la página de inicio de sesión */}
        <Grid container direction="row" justifyContent="end">
          <Typography sx={{ mr: 1 }}>Do you already have an account?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            Sign In
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
