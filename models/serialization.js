'use strict';
const model = require("../enums/db.models")

module.exports = (sequelize, DataTypes) => {
  const serialization = sequelize.define(model.serialization, {
    arrayName: DataTypes.STRING,
    arrayValue: DataTypes.STRING
  }, {modelName: model.serialization});
  serialization.associate = function(models) {
    // associations can be defined here
  };
  return serialization;
};