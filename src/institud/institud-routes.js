'use strict';

import { Router } from "express";

import {
  getInstitutions,
  getInstitutionById,
  createInstitution,
  updateInstitution,
  deleteInstitution
} from "./institud-controller.js";

import {
  validateCreateInstitution,
  validateUpdateInstitution,
  validateInstitutionId
} from "../../middlewares/institud-validation.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Institutions
 *   description: Endpoints para la gestión de instituciones
 */

// ==========================================
//                   GET
// ==========================================

/**
 * @swagger
 * /institutions/:
 *   get:
 *     summary: Obtener lista de instituciones
 *     tags: [Institutions]
 *     responses:
 *       200:
 *         description: Lista de instituciones obtenida exitosamente
 */
router.get(
  '/',
  getInstitutions
);

/**
 * @swagger
 * /institutions/{id}:
 *   get:
 *     summary: Obtener una institución por su ID
 *     tags: [Institutions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la institución
 *     responses:
 *       200:
 *         description: Institución obtenida exitosamente
 *       404:
 *         description: Institución no encontrada
 */
router.get(
  '/:id',
  validateInstitutionId,
  getInstitutionById
);

// ==========================================
//                   POST
// ==========================================

/**
 * @swagger
 * /institutions/:
 *   post:
 *     summary: Crear una nueva institución
 *     tags: [Institutions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Institución creada exitosamente
 *       400:
 *         description: Error de validación
 */
router.post(
  '/',
  validateCreateInstitution,
  createInstitution
);

// ==========================================
//                   PUT
// ==========================================

/**
 * @swagger
 * /institutions/{id}:
 *   put:
 *     summary: Actualizar una institución
 *     tags: [Institutions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la institución
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Institución actualizada exitosamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Institución no encontrada
 */
router.put(
  '/:id',
  validateUpdateInstitution,
  updateInstitution
);

// ==========================================
//                   DELETE
// ==========================================

/**
 * @swagger
 * /institutions/{id}:
 *   delete:
 *     summary: Eliminar una institución
 *     tags: [Institutions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la institución
 *     responses:
 *       200:
 *         description: Institución eliminada exitosamente
 *       404:
 *         description: Institución no encontrada
 */
router.delete(
  '/:id',
  validateInstitutionId,
  deleteInstitution
);

export default router;