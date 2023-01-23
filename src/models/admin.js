import Sequelize, { Model } from "sequelize";
import bcryptjs from 'bcryptjs';


export default class Admin  extends Model{

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

            sobrenome:{
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len: {
                        args: [3, 255],
                        msg: 'Campo "sobrenome" dever ter 3 à 255 caracteres.'
                    },
                },
            },

            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                  msg: 'Email já existe'
                },
      
                validate: {
                  isEmail: {
                    msg: 'Email inválido.',
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

    passwordIsValid(password) {
        return bcryptjs.compare(password, this.password_hash)
      }
}