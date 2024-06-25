import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';

import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { authSlice } from '../../../src/store/auth';
import { notAutheticatedState } from '../../fixtures/authFixtures';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloaderState: {
    auth: notAutheticatedState
  }
});

describe('Pruebas en el <LoginPage />', () => {
  
  test('debe de mostrar el componente <LoginPage /> correctamente', () => {

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect( screen.getAllByText( 'Login' ).length ).toBeGreaterThanOrEqual( 1 );
  });

  test('Botón de google debe de llamar el startGoogleSignIn', () => {
    
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText( 'google-button' );
    fireEvent.click( googleBtn );

  });
});