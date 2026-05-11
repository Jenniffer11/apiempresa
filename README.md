# API Empresa - NovaTech Solutions

Proyecto backend desarrollado con Node.js, Express y MongoDB para la empresa ficticia `NovaTech Solutions`.

## Descripcion

Esta API fue creada como parte de una actividad academica para practicar la estructura base de un proyecto backend utilizando buenas practicas en Node.js y Express.

El proyecto incluye:

- Inicializacion con `npm init -y`
- Uso de `express`, `mongoose`, `dotenv`, `cors` y `nodemon`
- Separacion por carpetas para configuracion, rutas, controladores y modelos
- Variables de entorno con archivo `.env`

## Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv
- CORS
- Nodemon

## Estructura del Proyecto

```text
apiempresa/
|-- config/
|   |-- database.js
|-- controllers/
|   |-- companyController.js
|-- models/
|   |-- Company.js
|-- routes/
|   |-- companyRoutes.js
|-- .env.example
|-- .gitignore
|-- app.js
|-- package.json
|-- package-lock.json
|-- README.md
|-- server.js
```

## Instalacion

1. Clonar el repositorio:

```bash
git clone https://github.com/Jenniffer11/apiempresa.git
```

2. Entrar a la carpeta del proyecto:

```bash
cd apiempresa
```

3. Instalar las dependencias:

```bash
npm install
```

4. Crear el archivo `.env` usando `.env.example` como guia.

## Variables de Entorno

Ejemplo de configuracion:

```env
HOST=0.0.0.0
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/novatech_db
```

## Ejecucion

Modo desarrollo:

```bash
npm run dev
```

Modo normal:

```bash
npm start
```

## Rutas Disponibles

### Ruta principal

`GET /`

Respuesta:

```json
{
  "message": "API de NovaTech Solutions funcionando correctamente"
}
```

### Bienvenida API

`GET /api`

### Informacion de la empresa

`GET /api/empresa`

### Servicios de la empresa

`GET /api/servicios`

### Empleados de la empresa

`GET /api/empleados`

## Ejemplo de URL local

```text
http://localhost:3000/api/empresa
```

## Autor

Proyecto realizado por Jenniffer Quiñonez.
