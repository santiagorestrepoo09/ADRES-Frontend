# ADRES - Frontend

Este proyecto es una aplicación web desarrollada en Angular para la gestión de adquisiciones y almacenamiento histórico. Proporciona funcionalidades como la creación, edición, eliminación y visualización de registros, así como filtros avanzados para buscar información.

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Angular CLI](https://angular.io/cli) (versión 12 o superior)
- [Git](https://git-scm.com/)

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd ADRES-Frontend
   ```
3. Instala las dependencias:
  ```bash
  npm install
   ```
Ejecución del proyecto
Para ejecutar el proyecto en un servidor de desarrollo local, utiliza el siguiente comando:
 ```bash
  npm serve
   ```
Luego, abre tu navegador y ve a la URL: http://localhost:4200
El servidor se recargará automáticamente si realizas cambios en los archivos del proyecto.

Estructura del proyecto
El proyecto está organizado de la siguiente manera:
   ```bash
    src/
    ├── app/
    │   ├── pages/
    │   │   ├── inicio/
    │   │   │   ├── inicio.component.ts
    │   │   │   ├── inicio.component.html
    │   │   │   ├── inicio.component.css
    │   │   ├── gestion-adquisiciones/
    │   │   │   ├── gestion-adquisiciones.component.ts
    │   │   │   ├── gestion-adquisiciones.component.html
    │   │   │   ├── gestion-adquisiciones.component.css
    │   ├── services/
    │   │   ├── adquisiciones.service.ts
    ├── assets/
    │   ├── images/
    │   │   ├── logo-adres.jpg
    │   ├── requerimientos.json
    ├── [index.html](http://_vscodecontentref_/0)
   ```


Scripts disponibles
  ng serve: Inicia el servidor de desarrollo.
  ng build: Compila la aplicación para producción en la carpeta dist/.
  ng test: Ejecuta las pruebas unitarias.
  ng lint: Analiza el código para detectar errores de estilo y sintaxis.
Notas adicionales
  Si estás utilizando un archivo JSON local para cargar datos, asegúrate de que el archivo esté ubicado en assets/requerimientos.json y que la ruta sea correcta en el método cargarRequerimientos().
