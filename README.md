# Sistema Completo de Gestión de Usuarios en la Terminal

Este es un proyecto de gestión de usuarios que permite a los usuarios realizar varias operaciones directamente desde la terminal, como crear, editar, ver, eliminar y buscar perfiles de usuarios. El sistema simula operaciones CRUD utilizando Node.js y ESModules.

## Características

- **Registro de usuarios**: Permite crear usuarios con nombre y contraseña.
- **Iniciar sesión**: Autentica a los usuarios con sus credenciales.
- **Gestión de perfiles**: Ver, editar y eliminar el perfil del usuario.
- **Operaciones CRUD**: Crear, leer, actualizar y eliminar usuarios.
- **Búsqueda de usuarios**: Buscar usuarios por nombre.
- **Simulación de base de datos**: Los perfiles se almacenan en un array en memoria.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en la terminal.
- **ESModules**: Para organizar el código utilizando `import` y `export`.
- **readline-sync**: Librería para capturar la entrada del usuario en la terminal.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/gestion-de-usuarios-terminal.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd gestion-de-usuarios-terminal
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Ejecuta la aplicación:
    ```bash
    node app/app.js
    ```

## Funcionalidades

### Crear Usuario
Permite registrar un nuevo usuario proporcionando un nombre y contraseña.

### Iniciar Sesión
Valida las credenciales ingresadas por el usuario.

### Ver Perfil
Muestra la información del perfil del usuario.

### Editar Perfil
Permite editar el nombre del usuario.

### Eliminar Usuario
Elimina el perfil del usuario de la "base de datos" (array en memoria).

### Buscar Usuarios
Permite buscar un usuario por su nombre.

## Estructura del Proyecto

```bash
gestion-de-usuarios-terminal/
├── app/
│   ├── app.js
│   ├── logicaUsuario.js
│   └── Usuario.js
├── node_modules/
├── package.json
└── README.md
