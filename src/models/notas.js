import Sequelize, { Model } from 'sequelize';


export default class Notas extends Model {


  static init(sequelize) {

    super.init({

    
      n_1: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 20],
            msg: 'Esse campo não pode ficar vazio.',
          },
        },
      },  


      n_2: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 20],
            msg: 'Esse campo não pode ficar vazio.',
          },
        },
      }, 


      n_3: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          len: {
            args: [0, 20],
            msg: 'Esse campo não pode ficar vazio.',
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


   
  }


}












