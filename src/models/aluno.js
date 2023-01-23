import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';


export default class Aluno extends Model {


  static init(sequelize) {

    super.init({

    
      numero: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          len: {
            args: [5, 10],
            msg: 'Esse campo não pode ficar vazio.',
          },
        },
      },  


      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 à  255 caracteres',
          },
        },
      },


      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo sobrenome deve ter entre 3 à  255 caracteres',
          },
        },
      },


      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique:{
          msg: 'Email já existe'
        },

        validate: {
          isEmail: {
            msg: 'Email inválido.',
          },
        },
      },

      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 200],
            msg: 'Campo idade não pode estar vazio',
          },
        },
      },


      curso: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 200],
            msg: 'Campo curso não pode estar vazio.',
          },
        },
      },


      classe: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 200],
            msg: 'Campo idade não pode estar vazio',
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
    this.addHook('beforeSave', async aluno => {
        aluno.password_hash = await bcryptjs.hash(aluno.password, 8)
    })
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash)
  }

}












