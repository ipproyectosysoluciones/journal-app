import React from 'react'; // Importamos React para poder utilizar JSX y componentes.
import ReactDOM from 'react-dom/client'; // Importamos ReactDOM para renderizar la aplicación en el DOM.
import { Provider } from 'react-redux'; // Importamos el Provider de react-redux para proporcionar el store de Redux a la aplicación.
import { BrowserRouter } from 'react-router-dom'; // Importamos BrowserRouter de react-router-dom para manejar el enrutamiento en la aplicación.

import { JournalApp } from './JournalApp'; // Importamos el componente principal de la aplicación, JournalApp.
import { store } from './store'; // Importamos el store configurado de Redux.
import './styles.css'; // Importamos los estilos globales de la aplicación.


// Renderizamos la aplicación en el elemento del DOM con el id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode es una herramienta para destacar problemas potenciales en la aplicación.
  <React.StrictMode>
    {/* Provider proporciona el store de Redux a todos los componentes de la aplicación */}
    <Provider store={ store }>
      {/* BrowserRouter permite el manejo de rutas en la aplicación */}
      <BrowserRouter>
        {/* JournalApp es el componente principal de la aplicación */}
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
