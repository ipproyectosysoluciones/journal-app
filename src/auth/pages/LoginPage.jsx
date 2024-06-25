// Importaciones de componentes y funciones necesarios para el componente LoginPage
import { useMemo } from 'react'; // Importa useMemo para memoizar el estado
import { useDispatch, useSelector } from 'react-redux'; // Importa useDispatch y useSelector para manejar el estado global de Redux
import { Link as RouterLink } from 'react-router-dom'; // Importa Link de react-router-dom para la navegación
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'; // Importa componentes de Material-UI
import { Google } from '@mui/icons-material'; // Importa el icono de Google

import { AuthLayout } from '../layout/AuthLayout'; // Importa el componente AuthLayout para el diseño de autenticación

import { useForm } from '../../hooks/useForm'; // Importa el hook useForm para el manejo de formularios
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'; // Importa acciones de autenticación desde el store de Redux

// Define los campos iniciales del formulario de login
const formData = {
  email: '',
  password: '',
}

// Definición del componente LoginPage
export const LoginPage = () => {
  // Obtiene el estado de autenticación y el mensaje de error desde el store de Redux
  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch(); // Obtiene la función dispatch para despachar acciones a Redux
  const { email, password, onInputChange } = useForm( formData ); // Utiliza el hook useForm para manejar los campos del formulario

  // Determina si el usuario está en proceso de autenticación
  const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

  // Función para manejar el envío del formulario de login
  const onSubmit = ( event ) => {
    event .preventDefault(); // Previene el comportamiento predeterminado del evento
    // console.log({ email, password });
    dispatch( startLoginWithEmailPassword({ email, password }) ); // Despacha la acción de inicio de sesión con email y contraseña
  };

  // Función para iniciar sesión con Google
  const omGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() ); // Despacha la acción de inicio de sesión con Google
  };

  // Renderiza el componente LoginPage
  return (
    <AuthLayout title="Login"> {/* Renderiza el componente AuthLayout con el título "Login" */}
      <form 
        onSubmit={ onSubmit } // Maneja el envío del formulario
        className='animate__animated animate__fadeIn animate__faster' // Agrega clases para animación
      >
        <Grid container>
          {/* Campos de entrada para el email y la contraseña */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            />

            {/* Muestra un mensaje de error si hay uno */}
            <Grid 
              container
              display={ !!errorMessage ? '': 'none' }
              sx={{ mt: 1 }}>
              <Grid 
                  item 
                  xs={ 12 }
                >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
            </Grid>

            {/* Botones para enviar el formulario y para iniciar sesión con Google */}
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button 
                  disabled={ isAuthenticating }
                  type="submit" 
                  variant="contained" 
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                  aria-label='google-button'
                  disabled={ isAuthenticating }
                  variant="contained" 
                  fullWidth
                  onClick={ omGoogleSignIn }
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Enlace para redirigir a la página de registro */}
        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} color="inherit" to="/auth/register">
            Create an account
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
