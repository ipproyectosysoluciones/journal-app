import { Grid, Typography } from '@mui/material'; // Importaciones de componentes de Material UI
import { StarOutline } from '@mui/icons-material'; // Importación del ícono StarOutline de Material UI

// Componente NothingSelectedView
export const NothingSelectedView = () => {
  return (
    // Contenedor principal utilizando Grid de Material UI con animación
    <Grid container 
      className='animate__animated animate__fadeIn animate__faster'
      spacing={ 0 }
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: 'calc( 100vh - 110px ) ', // Altura mínima para centrar el contenido verticalmente
        backgroundColor: 'primary.main', // Color de fondo
        borderRadius: 3 // Bordes redondeados
      }}
    >
      {/* Contenedor del ícono */}
      <Grid item xs={ 12 }>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} /> {/* Ícono con tamaño y color específicos */}
      </Grid>

      {/* Contenedor del texto */}
      <Grid item xs={ 12 }>
        <Typography color='white' variant='h5'>Select or create an entry</Typography> {/* Texto de instrucción */}
      </Grid>
    </Grid>
  );
};
