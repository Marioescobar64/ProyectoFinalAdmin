import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Gestor de practicas API",
      version: "1.0.0",
      description:
        "Documentación de las APIs para el sistema de gestión de practicas",
      contact: {
        name: "KinalPrax",
        email: "KinalPrax@gmail.com",
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        company: {
          type: "object",
          required: ["nombreEmpresa", "direccion", "correo", "encargado"],
          properties: {
            nombreEmpresa: {
              type: "string",
              maxLength: 255,
              description: "Nombre de la empresa",
            },
            direccion: {
              type: "string",
              maxLength: 255,
              description: "Dirección de la empresa",
            },
            telefono: {
              type: "string",
              maxLength: 20,
              description: "Teléfono de la empresa",
            },
            correo: {
              type: "string",
              format: "email",
              maxLength: 255,
              description: "Correo electrónico",
            },
            encargado: {
              type: "string",
              maxLength: 255,
              description: "Encargado de la empresa",
            },
          },
        },
        institud: {
          type: "object",
          required: ["nombre", "direccion"],
          properties: {
            nombre: {
              type: "string",
              maxLength: 255,
              description: "Nombre de la institución",
            },
            direccion: {
              type: "string",
              maxLength: 255,
              description: "Dirección de la institución",
            },
            telefono: {
              type: "string",
              maxLength: 20,
              description: "Teléfono de la institución",
            },
          },
        },
        practice: {
          type: "object",
          required: ["estudiante", "empresa", "fecha", "horas", "actividades"],
          properties: {
            estudiante: {
              type: "string",
              description: "ID del estudiante",
            },
            empresa: {
              type: "string",
              description: "ID de la empresa",
            },
            fecha: {
              type: "string",
              format: "date",
              description: "Fecha de la práctica",
            },
            horas: {
              type: "number",
              minimum: 0,
              description: "Cantidad de horas",
            },
            actividades: {
              type: "string",
              maxLength: 500,
              description: "Actividades realizadas",
            },
            estado: {
              type: "string",
              enum: ["pendiente", "aprobada", "rechazada"],
              description: "Estado de la práctica",
            },
            comentarios: {
              type: "string",
              maxLength: 500,
              description: "Comentarios adicionales",
            },
          },
        },
        reposteHoursmodel: {
          type: "object",
          required: ["estudiante", "horasTotales", "horasAprobadas", "horasPendientes"],
          properties: {
            estudiante: {
              type: "string",
              description: "ID del estudiante",
            },
            horasTotales: {
              type: "number",
              minimum: 0,
              description: "Total de horas requeridas",
            },
            horasAprobadas: {
              type: "number",
              minimum: 0,
              description: "Horas aprobadas",
            },
            horasPendientes: {
              type: "number",
              minimum: 0,
              description: "Horas pendientes",
            },
          },
        },
        review: {
          type: "object",
          required: ["practica", "supervisor", "comentario", "fecha"],
          properties: {
            practica: {
              type: "string",
              description: "ID de la práctica",
            },
            supervisor: {
              type: "string",
              description: "ID del supervisor",
            },
            comentario: {
              type: "string",
              maxLength: 500,
              description: "Comentario del supervisor",
            },
            fecha: {
              type: "string",
              format: "date",
              description: "Fecha de la revisión",
            },
          },
        },
        student: {
          type: "object",
          required: ["carnet", "nombre", "carrera", "correo", "horasRequeridas"],
          properties: {
            carnet: {
              type: "string",
              maxLength: 50,
              description: "Carnet del estudiante",
            },
            nombre: {
              type: "string",
              maxLength: 255,
              description: "Nombre del estudiante",
            },
            carrera: {
              type: "string",
              maxLength: 255,
              description: "Carrera del estudiante",
            },
            telefono: {
              type: "string",
              maxLength: 20,
              description: "Teléfono del estudiante",
            },
            correo: {
              type: "string",
              format: "email",
              maxLength: 255,
              description: "Correo electrónico",
            },
            horasRequeridas: {
              type: "number",
              minimum: 0,
              description: "Horas requeridas",
            },
            horasAcumuladas: {
              type: "number",
              minimum: 0,
              description: "Horas acumuladas",
            },
          },
        },
        supervisor: {
          type: "object",
          required: ["nombre", "correo", "empresa"],
          properties: {
            nombre: {
              type: "string",
              maxLength: 255,
              description: "Nombre del supervisor",
            },
            correo: {
              type: "string",
              format: "email",
              maxLength: 255,
              description: "Correo electrónico del supervisor",
            },
            telefono: {
              type: "string",
              maxLength: 20,
              description: "Teléfono del supervisor",
            },
            empresa: {
              type: "string",
              pattern: "^[a-fA-F0-9]{24}$",
              description: "ID de la empresa (MongoDB)",
            },
          },
        },
        user: {
          type: "object",
          required: ["nombre", "correo", "contrasena", "rol"],
          properties: {
            nombre: {
              type: "string",
              maxLength: 255,
              description: "Nombre del usuario",
            },
            correo: {
              type: "string",
              format: "email",
              description: "Correo electrónico",
            },
            contrasena: {
              type: "string",
              minLength: 6,
              description: "Contraseña del usuario",
            },
            rol: {
              type: "string",
              enum: ["estudiante", "supervisor", "coordinador"],
              description: "Rol del usuario",
            },
          },
        },
      },            // cierra schemas
    },              // cierra components
    security: [{ bearerAuth: [] }],
    servers: [
      {
        url: "http://localhost:3001/KinalPrax/v1",
        description: "Servidor local",
      },
    ],
    tags: [
      { name: "company", description: "Gestión del compañia" },
      { name: "evidence", description: "Gestor de la evidencia" },
      { name: "institud", description: "Gestor del instituto" },
      { name: "practice", description: "Gestión de las practicas" },
      { name: "reposteHoursmodel", description: "Gestión de reporte de horas" },
      { name: "review", description: "Gestión de las reseñas de la practica" },
      { name: "student", description: "Gestión del estudiante" },
      { name: "supervisor", description: "Gestión del supervisor" },
      { name: "user", description: "Gestión del usuario" },
    ],
  },                // cierra swaggerDefinition
  apis: [
    path.join(__dirname, "../src/**/*.js"),
  ],
};                  // cierra swaggerOptions

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export { swaggerDocs, swaggerUi };