import { Router } from 'express';
import { getAll, find } from '../controllers/phoneController';

const router = Router();

router.get('/', getAll);

router.get('/:id', find);

export default router;
