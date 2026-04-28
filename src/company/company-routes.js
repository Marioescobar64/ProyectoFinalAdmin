import { Router } from "express";

import {
  getCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany
} from "./company-controller.js";

import {
  validateCreateCompany,
  validateUpdateCompany,
  validateCompanyId
} from "../../middlewares/company-validation.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Companies
 *   description: Endpoints para la gestión de empresas
 */

/**
 * @swagger
 * /companies/:
 *   get:
 *     summary: Obtener lista de empresas
 *     tags: [Companies]
 *     responses:
 *       200:
 *         description: Lista de empresas obtenida exitosamente
 */
router.get('/', getCompanies);

/**
 * @swagger
 * /companies/{id}:
 *   get:
 *     summary: Obtener una empresa por su ID
 *     tags: [Companies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Empresa obtenida exitosamente
 *       404:
 *         description: Empresa no encontrada
 */
router.get(
  '/:id',
  validateCompanyId,
  getCompanyById
);

/**
 * @swagger
 * /companies/:
 *   post:
 *     summary: Crear una nueva empresa
 *     tags: [Companies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Empresa creada exitosamente
 *       400:
 *         description: Error de validación
 */
router.post(
  '/',
  validateCreateCompany,
  createCompany
);

/**
 * @swagger
 * /companies/{id}:
 *   put:
 *     summary: Actualizar una empresa
 *     tags: [Companies]
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
 *         description: Empresa actualizada exitosamente
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Empresa no encontrada
 */
router.put(
  '/:id',
  validateUpdateCompany,
  updateCompany
);

/**
 * @swagger
 * /companies/{id}:
 *   delete:
 *     summary: Eliminar una empresa
 *     tags: [Companies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Empresa eliminada exitosamente
 *       404:
 *         description: Empresa no encontrada
 */
router.delete(
  '/:id',
  validateCompanyId,
  deleteCompany
);

export default router;