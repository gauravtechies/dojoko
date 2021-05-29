'use strict';
const model = require("../enums/db.models")

module.exports = (sequelize, DataTypes) => {
  const multipleRows = sequelize.define(model.multipleRows, {
    arrayValue: DataTypes.STRING,
    arrayName: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  multipleRows.associate = function(models) {
    // associations can be defined here
  };
  return multipleRows;
};