'use strict';
const model = require("../enums/db.models")

module.exports = (sequelize, DataTypes) => {
  const multipleRowValues = sequelize.define(model.multipleRowValues, {
    dataValue: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  multipleRowValues.associate = function(models) {
    multipleRowValues.belongsTo(models.multipleRows)
    // associations can be defined here
  };
 
  return multipleRowValues;
};