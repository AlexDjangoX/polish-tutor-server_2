import { Router } from 'express';
import {
  createOrGetKanbanByAuth0ID,
  updateKanban,
} from '../controllers/kanban.js';

const router = Router();

router.put('/:id', updateKanban);
router.get('/:id', createOrGetKanbanByAuth0ID);

export default router;
