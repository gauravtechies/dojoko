'use strict';
var bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */

      //can use enums here and refine code 
    return queryInterface.bulkInsert('users', [{
      companyName: 'knp',
      email: 'knp@gmail.com',
      roleId: 1,
      password: bcrypt.hashSync("knp123456", 8),
      createdAt: 'admin',
      updatedAt: 'admin'
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
    return queryInterface.bulkDelete(user, null, {});

  }
};
