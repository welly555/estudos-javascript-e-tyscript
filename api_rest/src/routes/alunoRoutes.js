import { Router } from 'express';
import AlunoControllers from '../controllers/AlunoControllers';

const router = new Router();

router.get('/', AlunoControllers.index);

export default router;
