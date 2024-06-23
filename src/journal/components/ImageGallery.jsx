import { ImageList, ImageListItem } from '@mui/material'; // Importa los componentes necesarios de MUI

// Componente funcional ImageGallery
export const ImageGallery = ({ images }) => {
  return (
    // Componente de lista de imágenes de MUI
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
      { 
        // Mapea sobre la matriz de imágenes para renderizar cada una
        images.map(( image ) => (
          // Elemento de lista de imágenes de MUI
          <ImageListItem key={ image }>
            <img
              // Imagen con tamaño y calidad específicos, para cargar de manera eficiente
              srcSet={ `${ image }?w=164&h=164&fit=crop&auto=format&dpr=2 2x` }
              src={ `${ image }?w=164&h=164&fit=crop&auto=format` }
              alt="Note Image"
              loading="lazy"
            />
          </ImageListItem>
        ))
      }
    </ImageList>
  );
};
