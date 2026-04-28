'use strict';

import { Router } from "express";

import {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview
} from "./review-controller.js";

import {
  validateCreateReview,
  validateUpdateReview,
  validateReviewId
} from "../../middlewares/review-validation.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Endpoints para la gestión de reseñas
 */

// ==========================================
//                   GET
// ==========================================

/**
 * @swagger
 * /reviews/:
 *   get:
 *     summary: Obtener lista de reseñas
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: Lista de reseñas obtenida exitosamente
 */
router.get(
  '/',
  getReviews
);

/**
 * @swagger
 * /reviews/{id}:
 *   get:
 *     summary: Obtener una reseña por su ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reseña
 *     responses:
 *       200:
 *         description: Reseña obtenida exitosamente
 *       404:
 *         description: Reseña no encontrada
 */
router.get(
  '/:id',
  validateReviewId,
  getReviewById
);

// ==========================================
//                   POST
// ==========================================

/**
 * @swagger
 * /reviews/:
 *   post:
 *     summary: Crear una nueva reseña
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Reseña creada exitosamente
 *       400:
 *         description: Error de validación
 */
router.post(
  '/',
  validateCreateReview,
  createReview
);

// ==========================================
//                   PUT
// ==========================================

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Actualizar una reseña
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reseña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Reseña actualizada exitosamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Reseña no encontrada
 */
router.put(
  '/:id',
  validateUpdateReview,
  updateReview
);

// ==========================================
//                   DELETE
// ==========================================

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     summary: Eliminar una reseña
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reseña
 *     responses:
 *       200:
 *         description: Reseña eliminada exitosamente
 *       404:
 *         description: Reseña no encontrada
 */
router.delete(
  '/:id',
  validateReviewId,
  deleteReview
);

export default router;