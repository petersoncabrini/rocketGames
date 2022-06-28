'use strict';

const { query } = require("express-validator");
const { DATE } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('admin', {
    id: { type: Sequelize.INTEGER, UNSIGNED, autoIncrement:true, primaryKey:true, allowNull:false },
    nome: Sequelize.STRING(45),
    login: { type: Sequelize.STRING(50), unique:true},
    senha: Sequelize.STRING(45)   
    })},

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('admin');

  }
};