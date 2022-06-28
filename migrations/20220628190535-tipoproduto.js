'use strict';

const { query } = require("express-validator");
const { DATE } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('tipoproduto', {
    id: { type: Sequelize.INTEGER, UNSIGNED, autoIncrement:true, primaryKey:true, allowNull:false },
    tipoproduto: Sequelize.STRING(50)
     })},

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('tipoproduto');

  }
};
