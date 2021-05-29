'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const db = require('../models');
    return db.notes.sync()
  },

  down: (queryInterface, Sequelize) => {
    const db = require('../models')
    return queryInterface.dropTable(db.notes.tableName)
  }
};
