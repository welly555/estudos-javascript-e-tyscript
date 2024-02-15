import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import homeRouters from './src/routes/homeRoutes';
import userRouters from './src/routes/userRoutes';
import tokenRouters from './src/routes/tokenRoutes';
import alunoRouter from './src/routes/alunoRoutes';
import fotoRouter from './src/routes/fotosRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRouters);
    this.app.use('/users/', userRouters);
    this.app.use('/tokens/', tokenRouters);
    this.app.use('/alunos/', alunoRouter);
    this.app.use('/fotos/', fotoRouter);
  }
}

export default new App().app;
