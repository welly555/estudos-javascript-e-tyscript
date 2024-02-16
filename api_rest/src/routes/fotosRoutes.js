import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import FotoControllers from '../controllers/FotoControllers';

const router = new Router();

router.post('/', loginRequired, FotoControllers.store);

export default router;
