'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('roles', [{
        role: 'admin',
        created_by:'admin',
        updated_by:'admin'
      },{
        role:"hr",
        created_by:'admin',
        updated_by:'admin'
      },
        {
            role:"client",
            created_by:'admin',
            updated_by:'admin'
        
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('role', null, {});
    
  }
};
