const model = require("../enums/db.models")
module.exports = {
  
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(model.serialization, [{
      arrayName: "myArray",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(model.serialization, null, {});
  }
};