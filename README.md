# Heroes SPA (Single Page Application)

Esta es una Single Page Application (SPA) de Héroes creada con React y Vite. La aplicación permite a los usuarios buscar héroes, ver sus detalles y navegar entre diferentes secciones como Marvel y DC.

## Características

- Búsqueda de héroes en tiempo real.
- Páginas de detalle para cada héroe.
- Rutas protegidas y un sistema de login/logout simple.
- Construido con un enfoque en componentes reutilizables.
- Rápido y eficiente gracias a Vite.

## Demo

Puedes ver una demostración en vivo de la aplicación aquí:  
[https://guithub75.github.io/marvel](https://guithub75.github.io/marvel)



## Tecnologías Utilizadas

- React
- Vite
- React Router para el enrutamiento.
- Bootstrap para los estilos (o la librería de CSS que se esté usando).

## Puesta en Marcha

Sigue estos pasos para tener una copia del proyecto corriendo en tu máquina local para desarrollo y pruebas.

### Prerrequisitos

Necesitarás tener Node.js y npm (o yarn) instalados en tu sistema.

- Node.js (v18.x o superior recomendado)
- npm (viene con Node.js)

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/07-hores-spa.git
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd 07-hores-spa
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    ```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Ejecuta la aplicación en modo de desarrollo.
Abre http://localhost:5173 (o el puerto que indique Vite) para verla en tu navegador. La página se recargará automáticamente si haces cambios.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`. Empaqueta React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

### `npm run preview`

Ejecuta un servidor local para previsualizar el build de producción que se encuentra en la carpeta `dist`.
