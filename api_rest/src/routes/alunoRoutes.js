import { Router } from 'express';
import AlunoControllers from '../controllers/AlunoControllers';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', AlunoControllers.index);
router.post('/', loginRequired, AlunoControllers.store);
router.put('/:id', loginRequired, AlunoControllers.update);
router.get('/:id', AlunoControllers.show);
router.delete('/:id', loginRequired, AlunoControllers.delete);

export default router;
