'use strict';

import { Router } from "express";

import {
  getContactRecords,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} from "./supervisor-controller.js";

import {
  validateCreateSupervisor,
  validateUpdateSupervisor,
  validateSupervisorId
} from "../../middlewares/supervisor-validation.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Supervisors
 *   description: Endpoints para la gestión de supervisores/contactos
 */

// ==========================================
//                   GET
// ==========================================

/**
 * @swagger
 * /supervisors/:
 *   get:
 *     summary: Obtener lista de supervisores
 *     tags: [Supervisors]
 *     responses:
 *       200:
 *         description: Lista de supervisores obtenida exitosamente
 */
router.get(
  '/',
  getContactRecords
);

/**
 * @swagger
 * /supervisors/{id}:
 *   get:
 *     summary: Obtener un supervisor por su ID
 *     tags: [Supervisors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del supervisor
 *     responses:
 *       200:
 *         description: Supervisor obtenido exitosamente
 *       404:
 *         description: Supervisor no encontrado
 */
router.get(
  '/:id',
  validateSupervisorId,
  getContactById
);

// ==========================================
//                   POST
// ==========================================

/**
 * @swagger
 * /supervisors/:
 *   post:
 *     summary: Crear un nuevo supervisor
 *     tags: [Supervisors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Supervisor creado exitosamente
 *       400:
 *         description: Error de validación
 */
router.post(
  '/',
  validateCreateSupervisor,
  createContact
);

// ==========================================
//                   PUT
// ==========================================

/**
 * @swagger
 * /supervisors/{id}:
 *   put:
 *     summary: Actualizar un supervisor
 *     tags: [Supervisors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del supervisor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Supervisor actualizado exitosamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Supervisor no encontrado
 */
router.put(
  '/:id',
  validateUpdateSupervisor,
  updateContact
);

// ==========================================
//                   DELETE
// ==========================================

/**
 * @swagger
 * /supervisors/{id}:
 *   delete:
 *     summary: Eliminar un supervisor
 *     tags: [Supervisors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del supervisor
 *     responses:
 *       200:
 *         description: Supervisor eliminado exitosamente
 *       404:
 *         description: Supervisor no encontrado
 */
router.delete(
  '/:id',
  validateSupervisorId,
  deleteContact
);

export default router;