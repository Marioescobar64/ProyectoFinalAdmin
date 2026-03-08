# GIPS

## Descripción

GIPS es una API REST desarrollada con Node.js y Express.js para la gestión de un sistema administrativo de prácticas profesionales. Permite manejar usuarios, estudiantes, supervisores, empresas, instituciones, prácticas, evidencias, revisiones y reportes de horas. Utiliza MongoDB como base de datos y incluye autenticación JWT, subida de archivos a Cloudinary y validaciones de datos.

## Características

- **Gestión de Usuarios**: Crear, leer, actualizar y eliminar usuarios con autenticación JWT.
- **Estudiantes**: Administración completa de registros de estudiantes.
- **Supervisores**: Manejo de supervisores asignados a prácticas.
- **Empresas**: Registro y gestión de empresas asociadas.
- **Instituciones**: Administración de instituciones educativas.
- **Prácticas**: Control de prácticas profesionales.
- **Evidencias**: Subida y gestión de evidencias de prácticas.
- **Revisiones**: Sistema de revisiones para prácticas.
- **Reportes de Horas**: Registro de horas trabajadas.
- **Subida de Archivos**: Integración con Cloudinary para almacenamiento de archivos.
- **Validaciones**: Validaciones robustas con express-validator.
- **Seguridad**: Configuración de CORS, Helmet y rate limiting.
- **Monitoreo**: Logging con Morgan.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución.
- **Express.js**: Framework web.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para MongoDB.
- **JWT**: Autenticación basada en tokens.
- **Cloudinary**: Almacenamiento de archivos en la nube.
- **Multer**: Manejo de archivos multipart/form-data.
- **Express Validator**: Validación de datos.
- **Helmet**: Seguridad de headers HTTP.
- **CORS**: Configuración de políticas de origen cruzado.
- **Morgan**: Logging de solicitudes HTTP.
- **Express Rate Limit**: Limitación de tasa de solicitudes.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd ProyectoFinalAdmin
   ```

2. Instala las dependencias usando pnpm:
   ```bash
   pnpm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:
   ```
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/gips
   JWT_SECRET=tu_secreto_jwt
   CLOUDINARY_CLOUD_NAME=tu_cloud_name
   CLOUDINARY_API_KEY=tu_api_key
   CLOUDINARY_API_SECRET=tu_api_secret
   ```

## Configuración

- **Base de Datos**: Asegúrate de tener MongoDB corriendo localmente o configura la URI para una instancia remota.
- **Cloudinary**: Configura tus credenciales de Cloudinary para la subida de archivos.
- **JWT**: Define un secreto seguro para la generación de tokens JWT.

## Uso

1. Inicia el servidor:
   ```bash
   node index.js
   ```

2. El servidor estará corriendo en `http://localhost:3001` (o el puerto configurado).

3. La base URL de la API es `/GIPS/v1`.

4. Endpoint de salud: `GET /GIPS/v1/health`

## Endpoints

### Usuarios (`/GIPS/v1/user`)
- `POST /` - Crear un nuevo usuario
- `GET /` - Obtener todos los usuarios
- `GET /:id` - Obtener un usuario por ID
- `PUT /:id` - Actualizar un usuario por ID
- `DELETE /:id` - Eliminar un usuario por ID

### Estudiantes (`/GIPS/v1/student`)
- `GET /` - Obtener todos los estudiantes
- `GET /:id` - Obtener un estudiante por ID
- `POST /` - Crear un nuevo estudiante
- `PUT /:id` - Actualizar un estudiante por ID
- `DELETE /:id` - Eliminar un estudiante por ID

### Supervisores (`/GIPS/v1/supervisor`)
- `GET /` - Obtener todos los supervisores
- `GET /:id` - Obtener un supervisor por ID
- `POST /` - Crear un nuevo supervisor
- `PUT /:id` - Actualizar un supervisor por ID
- `DELETE /:id` - Eliminar un supervisor por ID

### Empresas (`/GIPS/v1/company`)
- `GET /` - Obtener todas las empresas
- `GET /:id` - Obtener una empresa por ID
- `POST /` - Crear una nueva empresa
- `PUT /:id` - Actualizar una empresa por ID
- `DELETE /:id` - Eliminar una empresa por ID

### Instituciones (`/GIPS/v1/institud`)
- `GET /` - Obtener todas las instituciones
- `GET /:id` - Obtener una institución por ID
- `POST /` - Crear una nueva institución
- `PUT /:id` - Actualizar una institución por ID
- `DELETE /:id` - Eliminar una institución por ID

### Prácticas (`/GIPS/v1/practice`)
- `GET /` - Obtener todas las prácticas
- `GET /:id` - Obtener una práctica por ID
- `POST /` - Crear una nueva práctica
- `PUT /:id` - Actualizar una práctica por ID
- `DELETE /:id` - Eliminar una práctica por ID

### Evidencias (`/GIPS/v1/evidence`)
- `GET /` - Obtener todas las evidencias
- `GET /:id` - Obtener una evidencia por ID
- `POST /` - Crear una nueva evidencia
- `PUT /:id` - Actualizar una evidencia por ID
- `DELETE /:id` - Eliminar una evidencia por ID

### Revisiones (`/GIPS/v1/review`)
- `GET /` - Obtener todas las revisiones
- `GET /:id` - Obtener una revisión por ID
- `POST /` - Crear una nueva revisión
- `PUT /:id` - Actualizar una revisión por ID
- `DELETE /:id` - Eliminar una revisión por ID

### Reportes de Horas (`/GIPS/v1/reposte`)
- `GET /` - Obtener todos los reportes de horas
- `GET /:id` - Obtener un reporte de horas por ID
- `POST /` - Crear un nuevo reporte de horas
- `PUT /:id` - Actualizar un reporte de horas por ID
- `DELETE /:id` - Eliminar un reporte de horas por ID

## Ejemplos

### Crear un Usuario
```bash
POST /GIPS/v1/user
Content-Type: application/json

{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "password": "password123"
}
```

### Obtener Todos los Estudiantes
```bash
GET /GIPS/v1/student
```

### Actualizar una Práctica
```bash
PUT /GIPS/v1/practice/12345
Content-Type: application/json

{
  "title": "Práctica Actualizada",
  "description": "Descripción actualizada"
}
```

## Scripts

- `pnpm install`: Instalar dependencias.
- `node index.js`: Iniciar el servidor.

## Contribución

1. Fork el proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
4. Push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia ISC.