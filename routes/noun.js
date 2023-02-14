import { Router } from 'express';

import { createNewNoun } from '../controllers/noun.js';
import { getAllNounsById } from '../controllers/noun.js';
import { getAllNounsByCategory } from '../controllers/noun.js';
import { updateNounById } from '../controllers/noun.js';
import { deleteNounById } from '../controllers/noun.js';

const router = Router();

router.post('/:id', createNewNoun);

router.post('/category/:id', getAllNounsByCategory);

router.put('/noun/:id', updateNounById);

router.delete('/noun/:id', deleteNounById);

router.get('/:id', getAllNounsById);

export default router;
