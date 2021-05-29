'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const db = require('../models');
    return db.jobs.sync()
  },

  down: (queryInterface, Sequelize) => {
    const db = require('../models')
    return queryInterface.dropTable(db.jobs.tableName)
  }
};
