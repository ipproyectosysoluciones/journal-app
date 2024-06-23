import { Navigate, Routes, Route } from 'react-router-dom'; // Importaciones necesarias de React Router
import { JournalPage } from '../pages/JournalPage'; // Importación de la página principal del journal

// Componente que define las rutas para el Journal
export const JournalRoutes = () => {
  return (
    // Definición de las rutas utilizando Routes de React Router
    <Routes>
      {/* Ruta principal que carga JournalPage cuando la URL es "/" */}
      <Route path="/" element={ <JournalPage /> } />
      {/* Redirección a la ruta principal para cualquier otra URL no especificada */}
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  );
};
