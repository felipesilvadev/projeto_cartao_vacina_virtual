'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: Sequelize.DATE,
      },
      rg: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      cpf: {
        type: Sequelize.STRING,
        unique: true,
      },
      cns: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      coren: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      rua: {
        type: Sequelize.STRING,
      },
      numero_casa: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING,
      },
      password_hash: {
        type: Sequelize.STRING,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  }
};
