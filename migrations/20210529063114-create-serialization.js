'use strict';
const model = require("../enums/db.models")
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(model.serialization, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      arrayName: {
        type: Sequelize.STRING
      },
      arrayValue: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('serializations');
  }
};