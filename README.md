[![Netlify Status](https://api.netlify.com/api/v1/badges/2e5e6728-3aae-40cb-ad6a-9c41bc4e03a8/deploy-status)](https://app.netlify.com/sites/journal-app-ipproyectosysoluciones/deploys)

# JournalApp

JournalApp es un proyecto desarrollado con React 18 y Vite en el curso de [React: de cero a experto (Hooks y MERN) de Fernando Herrera](https://www.udemy.com/share/103dsU3@EL7dDbJv4ZCT0yrx_xOQSCDUDf17kCQCUsw0L-b4I65HSBMzL1-YuSDr3pai9BBX/), utilizando Yarn como gestor de paquetes. Este README describe las características del proyecto y proporciona instrucciones para clonar y ejecutar el proyecto para fines de desarrollo.

## Características del Proyecto

### JournalApp Estructura y Diseño

- **Material UI**: El proyecto utiliza Material UI para la interfaz de usuario, aprovechando sus componentes estilizados y personalizables.
- **Diferentes componentes de Material**: Se implementan diversos componentes de Material UI para construir una interfaz de usuario coherente y atractiva.
- **Uso de funciones propias de MaterialUI**: Se emplean funciones y hooks propios de Material UI para gestionar temas, estilos y más.
- **Configuración de temas personalizados**: Se configura un tema personalizado para asegurar una apariencia consistente a lo largo de toda la aplicación.

### JournalApp Redux y Autenticación con Firebase

- **Redux aplicado en nuestro proyecto**: Redux se utiliza para la gestión del estado global de la aplicación.
- **Firebase**: Se integra Firebase para la autenticación y almacenamiento de datos.
- **Firestore**: Se utiliza Firestore como base de datos en tiempo real.
- **Redux Devtools**: Se configuran las Redux Devtools para facilitar la depuración.
- **Thunk**: Se emplea Thunk para manejar acciones asíncronas en Redux.
- **Formularios**: Se implementan formularios para la autenticación y gestión de entradas del diario.
- **Google Sign-In**: Se configura la autenticación con Google para facilitar el inicio de sesión.
- **Acciones Asíncronas**: Se manejan acciones asíncronas para la autenticación y otras operaciones.
- **Mantener el estado de la autenticación**: Se asegura que el estado de la autenticación se mantenga a lo largo de toda la aplicación.

### JournalApp Redux CRUD en Firestore y subida de archivos

- **CRUD hacia Firestore**: Se implementan operaciones CRUD (Crear, Leer, Actualizar, Eliminar) hacia Firestore.
- **Expandiendo nuestro store añadiendo otros reducers**: Se expanden los reducers en el store de Redux para gestionar diversas partes de la aplicación.
- **Seleccionar y subir archivos**: Se añaden funcionalidades para seleccionar y subir archivos.
- **Animaciones adicionales a nuestra aplicación**: Se integran animaciones para mejorar la experiencia del usuario.
- **Limpieza en el logout**: Se asegura que el estado de la aplicación se limpie adecuadamente al cerrar sesión.

## Clonación y Ejecución del Proyecto

### Requisitos Previos

- Tener Node.js y Yarn instalados en tu máquina.

### Instrucciones

1. **Clona el repositorio:**

   ```bash
   git clone git@github.com:ipproyectosysoluciones/journal-app.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd journalapp
   ```

3. **Instala las dependencias:**

   ```bash
   yarn install
   ```

4. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto y añade las configuraciones necesarias para Firebase.

   ```env
   VITE_FIREBASE_API_KEY=tu-api-key
   VITE_FIREBASE_AUTH_DOMAIN=tu-auth-domain
   VITE_FIREBASE_PROJECT_ID=tu-project-id
   VITE_FIREBASE_STORAGE_BUCKET=tu-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu-messaging-sender-id
   VITE_FIREBASE_APP_ID=tu-app-id
   VITE_CLOUDINARY_URL=tu-api-cloudinary
   ```

5. **Ejecuta el proyecto en modo desarrollo:**

   ```bash
   yarn dev
   ```

6. **Abre tu navegador web y visita:**

   ```bash
   http://localhost:5173
   ```

   Ahora deberías poder ver JournalApp en ejecución.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. **Crea un fork del repositorio.**
2. **Crea una nueva rama con tu característica o corrección:**

   ```bash
   git checkout -b feature/nueva-caracteristica
   ```

3. **Haz commit de tus cambios:**

   ```bash
   git commit -m 'Agrega una nueva característica'
   ```

4. **Haz push a la rama:**

   ```bash
   git push origin feature/nueva-caracteristica
   ```

5. **Abre una Pull Request.**

Este README proporciona una descripción clara del proyecto JournalApp, detallando sus características, instrucciones para clonar y ejecutar el proyecto, y guías para contribuir al desarrollo del mismo.
