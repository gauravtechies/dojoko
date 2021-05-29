'use strict';
const model = require("../enums/db.models")

module.exports = (sequelize, DataTypes) => {
  const notes = sequelize.define(model.notes, {
    note: DataTypes.TEXT
  }, {});
  notes.associate = function(models) {
    // associations can be defined here
    notes.belongsTo(models.jobs);
  };
  return notes;
};