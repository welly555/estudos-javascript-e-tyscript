import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import homeRouters from './src/routes/homeRoutes';
import userRouters from './src/routes/userRoutes';

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
  }
}

export default new App().app;
