/* eslint-disable func-names */
const bcrypt = require('bcryptjs');
const model = require('../enums/db.models')
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    model.user,
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
     companyName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        },
        
      },
      password: {   
        type: DataTypes.STRING,
        set(val) {
          this.setDataValue('password', bcrypt.hashSync(val, 8));
        }
     },
    
    },

    {
      indexes: []
    }
  );

  user.prototype.validatePassword = function (password) {
    return Promise.resolve(bcrypt.compareSync(password, this.password));
  };
  user.associate = function (models) {
    user.belongsTo(models.roles, {foreignKey: {allowNull:false,defaultValue:3}, sourceKey: 'id', constraints: false });
    user.hasMany(models.jobs);
    
    
  };
  return user;
};
