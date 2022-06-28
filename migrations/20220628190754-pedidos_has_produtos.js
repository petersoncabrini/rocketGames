'use strict';

const { query } = require("express-validator");
const { DATE } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('pedidos_has_produto', {
      pedidos_id: {type: Sequelize.DataTypes.INTEGER, references: {model: 'pedidos', key: 'id'}},
      produto_id: {type: Sequelize.DataTypes.INTEGER, references: {model: 'produto', key: 'id'}}
    })},

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('pedidos_has_produto');
  }
};
