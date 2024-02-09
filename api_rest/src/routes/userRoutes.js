import { Router } from 'express';
import UserControllers from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', UserControllers.store);
router.get('/', loginRequired, UserControllers.index);
router.get('/:id', UserControllers.show);
router.put('/:id', UserControllers.update);
router.delete('/:id', UserControllers.delete);

export default router;
