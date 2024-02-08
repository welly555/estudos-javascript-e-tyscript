import { Router } from 'express';
import tokenControllers from '../controllers/tokenController';

const router = new Router();

router.post('/', tokenControllers.store);

export default router;
