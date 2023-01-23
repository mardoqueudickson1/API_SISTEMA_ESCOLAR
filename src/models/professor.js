import Sequelize, { Model } from "sequelize";
import bcryptjs from 'bcryptjs';


export default class Aluno  extends Model{

    static init(sequelize) {

        super.init({
            nome:{
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len: {
                        args: [3, 255],
                        msg: 'Campo "curso" dever ter 3 à 255 caracteres.'
                    },
                },
            },


            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
        
              },
        
              password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                  len: {
                    args: [6, 50],
                    msg: 'A senha precisa ter entre 6 à 50 caracteres.',
                  },
                },
              },

              created_at:{
                type: Sequelize.DATE,
                allowNull: false,
              },
              
        
              updated_at:{
                type: Sequelize.DATE,
                allowNull: false,
              },

        }, {
            sequelize,
        })

        //Converte a semha em um hash antes de salvar no BD
        this.addHook('beforeSave', async user => {
            user.password_hash = await bcryptjs.hash(user.password, 8)
          })
        return this;
    }


    //Relacionameto tabela professores pertence a tabela cursos
    static associate(models){
        this.belongsTo(models.cursos, {foreignKey: 'curso_id'})
    }


    passwordIsValid(password) {
        return bcryptjs.compare(password, this.password_hash)
      }
}