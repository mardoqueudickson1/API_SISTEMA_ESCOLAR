import dotenv from "dotenv";
import express from 'express';

dotenv.config();

import './src/database'

import homeRoutes from './src/routes/homeRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import adminRoutes from './src/routes/adminRoutes';
import TokenRoutes from './src/routes/TokenRoutes';
import professorRoutes from './src/routes/professorRoutes';

class App {
  constructor() {
    this.app = express();
    this.middleware()
    this.routes();
  }

  middleware() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }


  //Todas as routas da aplicação
  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/aluno', alunoRoutes);
    this.app.use('/token', TokenRoutes);
    this.app.use('/admin', adminRoutes);
    this.app.use('/professor', professorRoutes)
  }
}

export default new App().app;
