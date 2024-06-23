// Importamos los componentes CircularProgress y Grid desde @mui/material.
import { CircularProgress, Grid } from '@mui/material';

// Definimos el componente funcional CheckingAuth.
export const CheckingAuth = () => {
  return (
    <Grid container // Utilizamos el componente Grid de MUI como contenedor principal.
      spacing={ 0 } // Sin espacio entre los elementos del Grid.
      direction='column' // Los elementos se alinearán en una columna.
      alignItems='center' // Alineamos los elementos centrados horizontalmente.
      justifyContent='center' // Alineamos los elementos centrados verticalmente.
      sx={{ // Estilos adicionales utilizando el sistema sx de MUI.
        minHeight: '100vh', // La altura mínima es del 100% del viewport.
        backgroundColor: 'primary.main', // Fondo del color principal definido en el tema.
        padding: 4, // Padding de 4 unidades.
      }}
    >
      {/* Un segundo Grid para contener el CircularProgress. */}
      <Grid container
        direction='row' // Alineamos los elementos en una fila.
        justifyContent='center' // Centramos el contenido horizontalmente.
      >
        {/* Indicador circular de progreso con color de advertencia. */}
        <CircularProgress color='warning' />
      </Grid>
    </Grid>
  );
};
