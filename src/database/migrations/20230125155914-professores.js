'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable('professors', {
      
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,

      },

      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,

      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,

      },

      curso_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model: 'cursos',
          key: 'id',
        },

        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'

      },

      classe:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      cadeira: {
        type: Sequelize.STRING,
        allowNull: false,

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

    })
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('professors');

  }
};
