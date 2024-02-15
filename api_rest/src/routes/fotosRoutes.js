import { Router } from 'express';

import FotoControllers from '../controllers/FotoControllers';

const router = new Router();

router.post('/', FotoControllers.store);

export default router;
