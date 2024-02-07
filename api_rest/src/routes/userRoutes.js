import { Router } from 'express';
import UserControllers from '../controllers/UserController';

const router = new Router();

router.post('/', UserControllers.store);

export default router;
