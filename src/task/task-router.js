import { Router } from "express";

import {
  getTaskRecords,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} from "./task-controller.js";

import {
  validateCreateTask,
  validateUpdateTask,
  validateTaskId
} from "../../middlewares/task-validation.js";

const router = Router();

// 📌 Obtener todas las tareas (con filtros y paginación)
router.get('/', getTaskRecords);

// 📌 Obtener tarea por ID
router.get(
  '/:id',
  validateTaskId,
  getTaskById
);

// 📌 Crear tarea
router.post(
  '/',
  validateCreateTask,
  createTask
);

// 📌 Actualizar tarea
router.put(
  '/:id',
  validateUpdateTask,
  updateTask
);

// 📌 Eliminar tarea
router.delete(
  '/:id',
  validateTaskId,
  deleteTask
);

export default router;