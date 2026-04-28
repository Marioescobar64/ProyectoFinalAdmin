'use strict';

import { Router } from "express";

import {
  getPractices,
  getPracticeById,
  createPractice,
  updatePractice,
  deletePractice
} from "./practice-controller.js";

import {
  validateCreatePractice,
  validateUpdatePractice,
  validatePracticeId
} from "../../middlewares/practice-validation.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Practices
 *   description: Endpoints para la gestión de prácticas
 */

// ==========================================
//                   GET
// ==========================================

/**
 * @swagger
 * /practices/:
 *   get:
 *     summary: Obtener lista de prácticas
 *     tags: [Practices]
 *     responses:
 *       200:
 *         description: Lista de prácticas obtenida exitosamente
 */
router.get(
  '/',
  getPractices
);

/**
 * @swagger
 * /practices/{id}:
 *   get:
 *     summary: Obtener una práctica por su ID
 *     tags: [Practices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la práctica
 *     responses:
 *       200:
 *         description: Práctica obtenida exitosamente
 *       404:
 *         description: Práctica no encontrada
 */
router.get(
  '/:id',
  validatePracticeId,
  getPracticeById
);

// ==========================================
//                   POST
// ==========================================

/**
 * @swagger
 * /practices/:
 *   post:
 *     summary: Crear una nueva práctica
 *     tags: [Practices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Práctica creada exitosamente
 *       400:
 *         description: Error de validación
 */
router.post(
  '/',
  validateCreatePractice,
  createPractice
);

// ==========================================
//                   PUT
// ==========================================

/**
 * @swagger
 * /practices/{id}:
 *   put:
 *     summary: Actualizar una práctica
 *     tags: [Practices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la práctica
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Práctica actualizada exitosamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Práctica no encontrada
 */
router.put(
  '/:id',
  validateUpdatePractice,
  updatePractice
);

// ==========================================
//                   DELETE
// ==========================================

/**
 * @swagger
 * /practices/{id}:
 *   delete:
 *     summary: Eliminar una práctica
 *     tags: [Practices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la práctica
 *     responses:
 *       200:
 *         description: Práctica eliminada exitosamente
 *       404:
 *         description: Práctica no encontrada
 */
router.delete(
  '/:id',
  validatePracticeId,
  deletePractice
);

export default router;