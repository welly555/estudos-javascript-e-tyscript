import { Router } from 'express';
import UserControllers from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', UserControllers.index);
// router.get('/:id', UserControllers.show);
// em cima inutil em baixo util
router.post('/', UserControllers.store);
router.put('/', loginRequired, UserControllers.update);
router.delete('/', loginRequired, UserControllers.delete);

export default router;
