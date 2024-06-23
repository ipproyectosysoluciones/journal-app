import.meta.env;

const baseUrl = import.meta.env.VITE_CLOUDINARY_URL

export const fileUpload = async( file ) => {

  if ( !file ) throw new Error( 'There is no file to upload' );

  const cloudUrl = baseUrl;

  const formData = new FormData();
  formData.append( 'upload_preset', 'journal-app' );
  formData.append( 'file', file );
  
  try {
    
    const resp = await fetch( cloudUrl, {
      method: 'POST',
      body: formData
    });

    // console.log(resp);

    if ( !resp.ok ) throw new Error( 'Could not upload image' );

    const cloudResp = await resp.json();
    // console.log({ cloudResp });

    return cloudResp.secure_url;

  } catch ( error ) {
    console.log(error);
    throw new Error( error.message );
  };
};
