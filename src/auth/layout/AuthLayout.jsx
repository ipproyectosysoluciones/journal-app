/* Este componente define el diseño de la página de autenticación, que incluye un contenedor centralizado con un formulario de autenticación.
Recibe dos propiedades: "children" para renderizar el contenido dentro del diseño y "title" para mostrar un título opcional. */

import { Grid, Typography } from '@mui/material';


export const AuthLayout = ({ children, title= '' }) => {
  return (
    <Grid container 
      spacing={ 0 }
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 4,
      }}
    >
      <Grid item
        className='box-shadow'
        xs={ 3 }
        sx={{
          width: { sm: 450 },
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography 
          variant='h5' 
          sx={{ mb: 1, }}
        >
          { title }
        </Typography>

        { children }
      </Grid>
    </Grid>
  );
};
