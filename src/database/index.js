import  Sequelize  from "sequelize";
import databaseConfig from "../config/database";
import Admin from "../models/admin";
import Aluno from "../models/aluno";
import Curso from "../models/curso";
import Professor from "../models/professor";


const models = [Aluno, Admin, Curso, Professor];

const connection = new Sequelize(databaseConfig);


models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));



