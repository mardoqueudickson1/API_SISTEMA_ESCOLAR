import dotenv from "dotenv";
import express from 'express';

dotenv.config();

import './src/database'

import homeRoutes from './src/routes/homeRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import adminRoutes from './src/routes/adminRoutes';
import TokenRoutes from './src/routes/TokenRoutes';
import cursoRouter  from './src/routes/cursoRoutes';
import professorRouter  from './src/routes/professorRouter'

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
    this.app.use('/curso', cursoRouter)
    this.app.use('/professor', professorRouter)

  }
}

export default new App().app;
