
import { authSlice, checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { autheticatedState, demoUser, initialState } from '../../fixtures/authFixtures';

describe('Pruebas en el authSlice', () => {
  
  test('Debe de regresar el estado inicial y llamarse "auth"', () => {
    
    const state = authSlice.reducer( initialState, {} );
    
    expect( state ).toEqual( initialState );
    expect( authSlice.name ).toBe( 'auth' );
  });

  test('Debe de realizar la autenticación', () => {
    
    const state = authSlice.reducer( initialState, login( demoUser ) );
    expect( state ).toEqual({
      status: 'authenticated', 
      uid: demoUser.uid, 
      email: demoUser.email, 
      displayName: demoUser.displayName, 
      photoURL: demoUser.photoURL, 
      errorMessage: null, 
    })
  });

  test('Debe de realizar el logout sin argumentos', () => {
    const state = authSlice.reducer( autheticatedState, logout() );
    expect( state ).toEqual({
      status: 'not-authenticated', 
      uid: null, 
      email: null, 
      displayName: null, 
      photoURL: null, 
      errorMessage: undefined, 
    });
  });
  
  test('Debe de realizar el logout y mostrar un mensaje de error', () => {
    const errorMessage = 'Credentials are not correct';
    const state = authSlice.reducer( autheticatedState, logout({ errorMessage }) );
    expect( state ).toEqual({
      status: 'not-authenticated', 
      uid: null, 
      email: null, 
      displayName: null, 
      photoURL: null, 
      errorMessage, 
    });
  });

  test('Debe de cambiar el estado a checking', () => {
    const state = authSlice.reducer( autheticatedState, checkingCredentials() );
    expect( state.status ).toBe('checking');
  });
});