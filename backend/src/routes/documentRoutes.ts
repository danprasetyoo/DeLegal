import express from 'express';
import {
  getAllDocuments,
  createDocument,
  deleteDocument,
} from '../controller/documentController';
import { authenticateUser } from '../middleware/authMiddleware';
import { asyncHandler } from '../middleware/asyncHandler';

const router = express.Router();

router.get('/', asyncHandler(getAllDocuments));
router.post('/', authenticateUser, asyncHandler(createDocument));
router.delete('/:id', authenticateUser, asyncHandler(deleteDocument));

export default router;
