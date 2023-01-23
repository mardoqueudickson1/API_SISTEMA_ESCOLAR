import dotenv from "dotenv";
import express from 'express';
dotenv.config();


import homeRoutes from './src/routes/homeRoutes'

class App {
  constructor() {
    this.app = express();
    this.middleware()
    this.routes();
  }

  middleware(){
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }


  //Todas as routas
  routes() {
    this.app.use('/', homeRoutes)

  }
}

export default new App().app;
