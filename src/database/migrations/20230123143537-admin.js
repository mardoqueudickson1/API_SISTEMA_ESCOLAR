'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.createTable('admin', { 


      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },


      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },


      sobrenome:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },


      password_hash:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      

      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },

    
    });
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.dropTable('admin');
    
  }
};
