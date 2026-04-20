import { body, param } from "express-validator";
import { checkValidators } from "./check-validation.js";

// ==============================
// CREATE TASK
// ==============================

export const validateCreateTask = [

  body('titulo')
    .notEmpty()
    .withMessage('El título es obligatorio')
    .isLength({ max: 255 })
    .withMessage('El título no puede exceder 255 caracteres'),

  body('descripcion')
    .optional()
    .isLength({ max: 1000 })
    .withMessage('La descripción no puede exceder 1000 caracteres'),

  body('fechaInicio')
    .notEmpty()
    .withMessage('La fecha de inicio es obligatoria')
    .isISO8601()
    .withMessage('Debe ser una fecha válida'),

  body('fechaFin')
    .optional()
    .isISO8601()
    .withMessage('Debe ser una fecha válida'),

  body('estado')
    .optional()
    .isIn(['pendiente', 'en progreso', 'completada'])
    .withMessage('Estado inválido'),

  // 🔗 Relación con Student
  body('estudiante')
    .notEmpty()
    .withMessage('El estudiante es obligatorio')
    .isMongoId()
    .withMessage('Debe ser un ID válido'),

  // 🔗 Relación con Supervisor (Contact)
  body('supervisor')
    .notEmpty()
    .withMessage('El supervisor es obligatorio')
    .isMongoId()
    .withMessage('Debe ser un ID válido'),

  checkValidators
];


// ==============================
// UPDATE TASK
// ==============================

export const validateUpdateTask = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  body('titulo')
    .optional()
    .isLength({ max: 255 })
    .withMessage('El título no puede exceder 255 caracteres'),

  body('descripcion')
    .optional()
    .isLength({ max: 1000 })
    .withMessage('La descripción no puede exceder 1000 caracteres'),

  body('fechaInicio')
    .optional()
    .isISO8601()
    .withMessage('Debe ser una fecha válida'),

  body('fechaFin')
    .optional()
    .isISO8601()
    .withMessage('Debe ser una fecha válida'),

  body('estado')
    .optional()
    .isIn(['pendiente', 'en progreso', 'completada'])
    .withMessage('Estado inválido'),

  body('estudiante')
    .optional()
    .isMongoId()
    .withMessage('Debe ser un ID válido'),

  body('supervisor')
    .optional()
    .isMongoId()
    .withMessage('Debe ser un ID válido'),

  checkValidators
];


// ==============================
// VALIDATE ID
// ==============================

export const validateTaskId = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  checkValidators
];