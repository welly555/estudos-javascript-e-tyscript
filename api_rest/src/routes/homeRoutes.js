import { Router } from 'express';
import HomeControllers from '../controllers/HomeControllers';

const router = new Router();

router.get('/', HomeControllers.index);

export default router;
