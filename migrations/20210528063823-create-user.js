'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const db = require('../models');
    return db.user.sync()
  },

  down: (queryInterface, Sequelize) => {
    const db = require('../models')
    return queryInterface.dropTable(db.user.tableName)
  }
};
