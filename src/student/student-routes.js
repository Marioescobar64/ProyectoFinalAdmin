'use strict';

import { Router } from "express";

import {
  getStudentRecords,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} from "./student-controller.js";

import {
  validateCreateStudent,
  validateUpdateStudent,
  validateStudentId
} from "../../middlewares/student-validation.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Endpoints para la gestión de estudiantes
 */

// ==========================================
//                   GET
// ==========================================

/**
 * @swagger
 * /students/:
 *   get:
 *     summary: Obtener lista de estudiantes
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Lista de estudiantes obtenida exitosamente
 */
router.get(
  '/',
  getStudentRecords
);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Obtener un estudiante por su ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del estudiante
 *     responses:
 *       200:
 *         description: Estudiante obtenido exitosamente
 *       404:
 *         description: Estudiante no encontrado
 */
router.get(
  '/:id',
  validateStudentId,
  getStudentById
);

// ==========================================
//                   POST
// ==========================================

/**
 * @swagger
 * /students/:
 *   post:
 *     summary: Crear un nuevo estudiante
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Estudiante creado exitosamente
 *       400:
 *         description: Error de validación
 */
router.post(
  '/',
  validateCreateStudent,
  createStudent
);

// ==========================================
//                   PUT
// ==========================================

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Actualizar un estudiante
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del estudiante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Estudiante actualizado exitosamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Estudiante no encontrado
 */
router.put(
  '/:id',
  validateUpdateStudent,
  updateStudent
);

// ==========================================
//                   DELETE
// ==========================================

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Eliminar un estudiante
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del estudiante
 *     responses:
 *       200:
 *         description: Estudiante eliminado exitosamente
 *       404:
 *         description: Estudiante no encontrado
 */
router.delete(
  '/:id',
  validateStudentId,
  deleteStudent
);

export default router;