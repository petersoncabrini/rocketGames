'use strict';

const { query } = require("express-validator");
const { DATE } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('pedidos', {
     id: { type: Sequelize.INTEGER,UNSIGNED,autoIncrement: true, primaryKey: true },
     data_pedido: Sequelize.DATETIME,
     valor_total: Sequelize.STRING(45),
     })},



  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('pedidos');

  }
};
