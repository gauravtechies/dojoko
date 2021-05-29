'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const db = require('../models');
    return db.roles.sync()
  },

  down: (queryInterface, Sequelize) => {
    const db = require('../models')
    return queryInterface.dropTable(db.roles.tableName)
  }
};
