import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

const formData = {
  displayName: 'John Doe',
  email: 'johndoe@google.com',
  password: '123456',
}

const formValidations = {
  displayName: [(value) => value.trim().length > 1, 'Full name is required'],
  email: [(value) => value.includes('@'), 'The email must have an @'],
  password: [(value) => value.length >= 6, 'Password must be at least 6 characters long'],
};

export const RegisterPage = () => {

  const { 
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();

    console.log({ formState });
  };


  return (
    <AuthLayout title="Crear Cuenta">
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Enter your full name"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid }
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
            />

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button 
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

        <Grid container direction="row" justifyContent="end">
          <Typography sx={{ mr: 1 }}>Do you already have an account?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            Sign In
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}
