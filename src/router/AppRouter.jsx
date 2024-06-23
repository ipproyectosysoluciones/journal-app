import { Navigate, Routes, Route } from 'react-router-dom'; // Importa los componentes necesarios de react-router-dom

import { AuthRoutes } from '../auth/routes/AuthRoutes'; // Importa las rutas relacionadas con la autenticación

import { JournalRoutes } from '../journal/routes/JournalRoutes'; // Importa las rutas relacionadas con la aplicación del diario
import { CheckingAuth } from '../ui'; // Importa el componente para verificar la autenticación
import { useCheckAuth } from '../hooks'; // Importa el hook personalizado para verificar la autenticación


export const AppRouter = () => {

  const status = useCheckAuth(); // Obtiene el estado de la autenticación utilizando el hook personalizado

  if ( status === 'checking' ) { // Si se está verificando la autenticación, muestra el componente CheckingAuth
    return <CheckingAuth />
  };

  return (
    <Routes>
      {/* Determina las rutas dependiendo del estado de la autenticación */}
      {
        ( status === 'authenticated' ) // Si el usuario está autenticado, muestra las rutas relacionadas con el diario
         ? <Route path="/*" element={ <JournalRoutes /> } />
         : <Route path="/auth/*" element={ <AuthRoutes /> } /> // Si no está autenticado, muestra las rutas relacionadas con la autenticación
      }

      <Route path="/*" element={ <Navigate to='/auth/login' /> } /> {/* Redirige a la página de inicio de sesión si ninguna ruta coincide */}

      {/* Login y Registro */}
      {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

      {/* Journal App */}
      {/* <Route path="/*" element={ <JournalRoutes /> } /> */}
    </Routes>
  );
};
