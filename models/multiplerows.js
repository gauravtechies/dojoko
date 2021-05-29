'use strict';
const model = require("../enums/db.models")

module.exports = (sequelize, DataTypes) => {
  const multipleRows = sequelize.define(model.multipleRows, {
    arrayName: DataTypes.STRING,
  }, {});
  multipleRows.associate = function(models) {
    // associations can be defined here
    multipleRows.hasMany(models.multipleRowValues)
  };
  return multipleRows;
};