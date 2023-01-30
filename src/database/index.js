import  Sequelize  from "sequelize";
import databaseConfig from "../config/database";
import Admin from "../models/admin";
import Aluno from "../models/aluno";
import Curso from "../models/curso";
import Professor from "../models/professor";
import Notas from "../models/notas";


const models = [Aluno, Admin, Curso, Professor, Notas];

const connection = new Sequelize(databaseConfig);


models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));



