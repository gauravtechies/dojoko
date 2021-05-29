// User credentials and scopes in the example application
const db=require('../models')
const jwt = require('jsonwebtoken');
const JWT_EXPIRATION_TIME_ACCESS = '60m';
const JWT_EXPIRATION_TIME_REFRESH = '2600m';
const users = {
   
    tokenGeneration :async function(userData) {
      var id=userData.id
      var refreshToken= jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME_REFRESH });
      var accessToken= jwt.sign({user:userData}, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME_ACCESS });
     
      return {accessToken,refreshToken}
      
    },
    loginRefreshToken: async function(userId){
      return result = await db.user.findOne({raw:true,where:{id:userId}, include: db.roles})
    }
};
module.exports=users;