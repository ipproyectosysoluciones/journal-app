import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';

import { Navigate, Routes, Route } from 'react-router-dom';
import { FirebaseAuth } from '../firebase/config';

import { login, logout } from '../store/auth';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui';


export const AppRouter = () => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
    
    onAuthStateChanged( FirebaseAuth, async( user ) => {
      if ( !user ) return dispatch( logout() );

      const { displayName, email, photoURL, uid } = user;
      dispatch( login({ displayName, email, photoURL, uid }) );
    });
  
  }, []);
  

  if ( status === 'checking' ) {
    return <CheckingAuth />
  };

  return (
    <Routes>

      {
        ( status === 'authenticated' )
         ? <Route path="/*" element={ <JournalRoutes /> } />
         : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }

      <Route path="/*" element={ <Navigate to='/auth/login' /> } />

      {/* Login y Registro */}
      {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

      {/* Journal App */}
      {/* <Route path="/*" element={ <JournalRoutes /> } /> */}
    </Routes>
  );
};
