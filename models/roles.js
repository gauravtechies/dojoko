const model = require("../enums/db.models")

module.exports = (sequelize,DataTypes) => {
    const Role = sequelize.define(model.roles,{
        id:{
            type:DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement: true
        },
        role : {
            type : DataTypes.STRING,
            allowNull : false
        },
        created_by : {
            type : DataTypes.STRING,
            allowNull : true
        },
        
        updated_by : {
            type : DataTypes.STRING,
            allowNull : true
        }
    }, {
        
    });

    Role.associate = function(models){
        Role.hasMany(models.user, {foreignKey: 'roleId', sourceKey: 'id',constraints: false,defaultValue: 3});
    }

    return Role;

}