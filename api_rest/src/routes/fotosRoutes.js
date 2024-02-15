import { Router } from 'express';
import multer from 'multer';

import FotoControllers from '../controllers/FotoControllers';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), FotoControllers.store);

export default router;
