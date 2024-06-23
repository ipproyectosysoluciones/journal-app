// Este archivo se encarga de cargar un archivo a un servicio de almacenamiento en la nube, en este caso, Cloudinary.

// import.meta.env; // Accede a las variables de entorno definidas en Vite

// const baseUrl = import.meta.env.VITE_CLOUDINARY_URL // Obtiene la URL base de Cloudinary desde las variables de entorno

export const fileUpload = async( file ) => {
  // Esta función asincrónica carga un archivo a Cloudinary

  // Si no se proporciona un archivo, se lanza un error
  // if ( !file ) throw new Error( 'There is no file to upload' );

  if ( !file ) return null;

  const cloudUrl = 'https://api.cloudinary.com/v1_1/dhouj4ise/upload'; // URL de Cloudinary

  const formData = new FormData(); // Crea un objeto FormData para enviar el archivo al servidor
  formData.append( 'upload_preset', 'journal-app' ); // Añade el preset de carga de Cloudinary
  formData.append( 'file', file ); // Añade el archivo a cargar al FormData
  
  try {
    // Intenta realizar la carga del archivo al servicio de almacenamiento en la nube
    const resp = await fetch( cloudUrl, {
      method: 'POST', // Utiliza el método POST para enviar los datos
      body: formData, // Utiliza el objeto FormData que contiene el archivo
    });

    // console.log(resp);
    // Si la respuesta no es exitosa, lanza un error
    if ( !resp.ok ) throw new Error( 'Could not upload image' );

    const cloudResp = await resp.json(); // Convierte la respuesta del servidor a JSON
    // console.log({ cloudResp });
    return cloudResp.secure_url; // Devuelve la URL segura del archivo cargado en Cloudinary

  } catch ( error ) {
    // console.log(error); // Registra el error en la consola
    // throw new Error( error.message ); // Lanza un error con el mensaje correspondiente

    return null; // Devuelve null para indicar que no se pudo cargar el archivo
  };
};
