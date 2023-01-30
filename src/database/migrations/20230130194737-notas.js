'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('notas', {

      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
      },

      n_1: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      n_2: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      n_3: {
        type: Sequelize.FLOAT,
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

  async down(queryInterface) {

    await queryInterface.dropTable('notas');

  }
};
