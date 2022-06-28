'use strict';

const { query } = require("express-validator");
const { DATE } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('endereço', {
     id: { type: Sequelize.INTEGER,UNSIGNED,autoIncrement: true, primaryKey: true },
     cidade: Sequelize.STRING(45),
     estado: Sequelize.STRING(45),
     CEP: Sequelize.STRING(8),
     logradouro: Sequelize.STRING(45),
     bairro: Sequelize.STRING(45),
     complemento: Sequelize.STRING(45)
     
     })},



  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('endereço');

  }
};
