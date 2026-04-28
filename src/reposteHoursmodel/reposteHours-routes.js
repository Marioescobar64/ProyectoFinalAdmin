'use strict';

import { Router } from "express";

import {
  getProgressRecords,
  getProgressById,
  createProgress,
  updateProgress,
  deleteProgress
} from "./reposteHours-controller.js";

import {
  validateCreateProgress,
  validateUpdateProgress,
  validateProgressId
} from "../../middlewares/reposteHours-validation.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Progress
 *   description: Endpoints para la gestión de reportes de horas/progreso
 */

// ==========================================
//                   GET
// ==========================================

/**
 * @swagger
 * /progress/:
 *   get:
 *     summary: Obtener lista de registros de progreso
 *     tags: [Progress]
 *     responses:
 *       200:
 *         description: Lista de registros obtenida exitosamente
 */
router.get(
  '/',
  getProgressRecords
);

/**
 * @swagger
 * /progress/{id}:
 *   get:
 *     summary: Obtener un registro de progreso por su ID
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del registro
 *     responses:
 *       200:
 *         description: Registro obtenido exitosamente
 *       404:
 *         description: Registro no encontrado
 */
router.get(
  '/:id',
  validateProgressId,
  getProgressById
);

// ==========================================
//                   POST
// ==========================================

/**
 * @swagger
 * /progress/:
 *   post:
 *     summary: Crear un nuevo registro de progreso
 *     tags: [Progress]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Registro creado exitosamente
 *       400:
 *         description: Error de validación
 */
router.post(
  '/',
  validateCreateProgress,
  createProgress
);

// ==========================================
//                   PUT
// ==========================================

/**
 * @swagger
 * /progress/{id}:
 *   put:
 *     summary: Actualizar un registro de progreso
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del registro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Registro actualizado exitosamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Registro no encontrado
 */
router.put(
  '/:id',
  validateUpdateProgress,
  updateProgress
);

// ==========================================
//                   DELETE
// ==========================================

/**
 * @swagger
 * /progress/{id}:
 *   delete:
 *     summary: Eliminar un registro de progreso
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del registro
 *     responses:
 *       200:
 *         description: Registro eliminado exitosamente
 *       404:
 *         description: Registro no encontrado
 */
router.delete(
  '/:id',
  validateProgressId,
  deleteProgress
);

export default router;