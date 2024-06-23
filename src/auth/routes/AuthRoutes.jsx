/* Este componente define las rutas de autenticación utilizando React Router.
Si el usuario accede a "/auth/login", se muestra la página de inicio de sesión.
Si el usuario accede a "/auth/register", se muestra la página de registro.
Si el usuario intenta acceder a cualquier otra ruta dentro de "/auth", será redirigido a la página de inicio de sesión por defecto. */


import { Navigate, Routes, Route } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages'; // Importa las páginas de inicio de sesión y registro


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={ <LoginPage /> } /> {/* Ruta para la página de inicio de sesión */}
      <Route path="register" element={ <RegisterPage /> } /> {/* Ruta para la página de registro */}

      {/* Si el usuario intenta acceder a cualquier otra ruta dentro de "/auth", será redirigido a la página de inicio de sesión */}
      <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  );
};
