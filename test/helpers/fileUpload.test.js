import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({ 
  cloud_name: 'dhouj4ise',
  api_key: '725815342662626',
  api_secret: 'Tw8beq5JUg-99ZgHxxkfDOZpHBk',
  secure: true,
});

describe('Pruebas en fileUpload', () => {
  
  test('Debe de subir el archivo correctamente a cloudinary', async() => {
    
    const imageUrl = 'https://picsum.photos/400/300';
    const resp = await fetch( imageUrl );
    const blob = await resp.blob();
    const file = new File([ blob ], 'Foto.jpg');

    const url = await fileUpload( file );
    expect( typeof url ).toBe('string');

    // console.log(url);
    const segments = url.split('/');
    const imageId = segments[ segments.length - 1 ].replace( '.jpg', '' );
    // console.log({imageId});
    const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
      resource_type: 'image'
    });
    console.log({cloudResp});
  },10000);

  test('Debe de retornar null', async() => {

    const file = new File([], 'Foto.jpg');
    const url = await fileUpload( file );
    expect( url ).toBe( null );
  });
});