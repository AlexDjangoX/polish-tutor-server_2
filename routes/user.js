import { Router } from 'express';

import { getAllUsers } from '../controllers/users.js';
import { getUserById } from '../controllers/users.js';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);

export default router;
