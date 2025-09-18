# API de Registro de Gastos Personales

Una API RESTful para gestionar gastos personales, desarrollada con Node.js, Express y MongoDB.

## Descripción

Este proyecto tiene como objetivo proporcionar una solución sencilla y eficiente para registrar y gestionar los gastos personales. La API permite a los usuarios autenticarse, registrar sus compras y realizar operaciones CRUD sobre ellas. Además, incluye características de seguridad como autenticación basada en tokens JWT y validación de entradas.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir aplicaciones web y APIs.
- **MongoDB**: Base de datos NoSQL para almacenar los datos.
- **JWT**: Para la autenticación y autorización segura.
- **bcrypt**: Para el hashing de contraseñas.

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona el repositorio:

```bash
git clone https://github.com/CarlosZubilete/Api-Personal-Expense-Record.git
cd Api-Personal-Expense-Record
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:
   Crea un archivo `.env` en el directorio raíz y añade las siguientes variables:

```
PORT=3000
MONGODB_URI=tu_cadena_de_conexión_a_mongodb
JWT_SECRET=tu_secreto_jwt
```

4. Inicia el servidor:

```bash
npm start
```

## Uso

Para usar la API, asegúrate de que el servidor esté en ejecución y que tengas configurada una base de datos MongoDB. Los endpoints principales son:

### Autenticación

- **POST** `/auth/register`: Registrar un nuevo usuario.
- **POST** `/auth/login`: Iniciar sesión.
- **POST** `/auth/logout`: Cerrar sesión.

### Compras

- **POST** `/purchases/new`: Crear una nueva compra.
- **GET** `/purchases`: Obtener todas las compras (requiere autenticación).
- **GET** `/purchases/:id`: Obtener una compra específica.
- **PATCH** `/purchases/:id`: Actualizar una compra.
- **DELETE** `/purchases/:id`: Eliminar una compra.

## Autor / Contacto

Este proyecto fue desarrollado por **Carlos Zubilete**.  
Si tienes preguntas o sugerencias, puedes contactarme a través de mi [GitHub](https://github.com/CarlosZubilete).

## License

This project is licensed under the MIT License.

```

```
