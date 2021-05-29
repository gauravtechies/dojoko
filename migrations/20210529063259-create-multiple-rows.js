'use strict';
const dbEnums = require('../enums/db.models');
const db = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
     return db[dbEnums.multipleRows].sync();
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(db[dbEnums.multipleRows].tableName)
  }
};
