import { Router } from "express";

import {
  getContactRecords,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} from "./supervisor-controller.js";

import {
  validateCreateContact,
  validateUpdateContact,
  validateContactId
} from "../../middlewares/supervisor-validation.js";

const router = Router();

router.get('/', getContactRecords);

router.get(
  '/:id',
  validateContactId,
  getContactById
);

router.post(
  '/',
  validateCreateContact,
  createContact
);

router.put(
  '/:id',
  validateUpdateContact,
  updateContact
);

router.delete(
  '/:id',
  validateContactId,
  deleteContact
);

export default router;
