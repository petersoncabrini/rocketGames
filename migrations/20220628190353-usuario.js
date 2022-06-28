'use strict';

const { query } = require("express-validator");
const { DATE } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('usuario', {
     id: { type: Sequelize.INTEGER,UNSIGNED,autoIncrement: true, primaryKey: true },
     nome: Sequelize.STRING(45),
     email: Sequelize.STRING(50),
     telefone: Sequelize.STRING(11),
     data_de_nascimento: Sequelize.DATE,
     senha: Sequelize.STRING(45)
        
     })},



  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('usuario');

  }
};
