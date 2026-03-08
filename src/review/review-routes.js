import { Router } from "express";

import {
  getSupervisionRecords,
  getSupervisionById,
  createSupervision,
  updateSupervision,
  deleteSupervision
} from "./review-controller.js";

import {
  validateCreateSupervision,
  validateUpdateSupervision,
  validateSupervisionId
} from "../../middlewares/review-validation.js";

const router = Router();

router.get('/', getSupervisionRecords);

router.get(
  '/:id',
  validateSupervisionId,
  getSupervisionById
);

router.post(
  '/',
  validateCreateSupervision,
  createSupervision
);

router.put(
  '/:id',
  validateUpdateSupervision,
  updateSupervision
);

router.delete(
  '/:id',
  validateSupervisionId,
  deleteSupervision
);

export default router;
