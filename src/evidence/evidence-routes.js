import { Router } from "express";

import {
  getDocuments,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument
} from "./evidence-controller.js";

import {
  validateCreateDocument,
  validateUpdateDocument,
  validateDocumentId
} from "../../middlewares/evidence-validation.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Documents
 *   description: Endpoints para la gestión de documentos/evidencias
 */

/**
 * @swagger
 * /documents/:
 *   get:
 *     summary: Obtener lista de documentos
 *     tags: [Documents]
 *     responses:
 *       200:
 *         description: Lista de documentos obtenida exitosamente
 */
router.get('/', getDocuments);

/**
 * @swagger
 * /documents/{id}:
 *   get:
 *     summary: Obtener un documento por su ID
 *     tags: [Documents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Documento obtenido exitosamente
 *       404:
 *         description: Documento no encontrado
 */
router.get(
  '/:id',
  validateDocumentId,
  getDocumentById
);

/**
 * @swagger
 * /documents/:
 *   post:
 *     summary: Crear un nuevo documento
 *     tags: [Documents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Documento creado exitosamente
 *       400:
 *         description: Error de validación
 */
router.post(
  '/',
  validateCreateDocument,
  createDocument
);

/**
 * @swagger
 * /documents/{id}:
 *   put:
 *     summary: Actualizar un documento
 *     tags: [Documents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Documento actualizado exitosamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Documento no encontrado
 */
router.put(
  '/:id',
  validateUpdateDocument,
  updateDocument
);

/**
 * @swagger
 * /documents/{id}:
 *   delete:
 *     summary: Eliminar un documento
 *     tags: [Documents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Documento eliminado exitosamente
 *       404:
 *         description: Documento no encontrado
 */
router.delete(
  '/:id',
  validateDocumentId,
  deleteDocument
);

export default router;