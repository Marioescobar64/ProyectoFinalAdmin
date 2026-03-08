import { body, param } from "express-validator";
import { checkValidators } from "./check-validation.js";

export const validateCreateUser = [

  body('nombre')
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isLength({ max: 255 })
    .withMessage('El nombre no puede exceder 255 caracteres'),

  body('correo')
    .notEmpty()
    .withMessage('El correo es obligatorio')
    .isEmail()
    .withMessage('Debe ser un correo válido')
    .isLength({ max: 255 })
    .withMessage('El correo no puede exceder 255 caracteres'),

  body('contrasena')
    .notEmpty()
    .withMessage('La contraseña es obligatoria')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),

  body('rol')
    .notEmpty()
    .withMessage('El rol es obligatorio')
    .isIn(['estudiante', 'supervisor', 'coordinador'])
    .withMessage('El rol debe ser estudiante, supervisor o coordinador'),

  checkValidators
];

export const validateUpdateUser = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  body('nombre')
    .optional()
    .isLength({ max: 255 })
    .withMessage('El nombre no puede exceder 255 caracteres'),

  body('correo')
    .optional()
    .isEmail()
    .withMessage('Debe ser un correo válido')
    .isLength({ max: 255 })
    .withMessage('El correo no puede exceder 255 caracteres'),

  body('contrasena')
    .optional()
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),

  body('rol')
    .optional()
    .isIn(['estudiante', 'supervisor', 'coordinador'])
    .withMessage('El rol debe ser estudiante, supervisor o coordinador'),

  checkValidators
];

export const validateUserId = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  checkValidators
];
