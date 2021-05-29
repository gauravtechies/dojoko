// middleware for doing role-based permissions
const helpers = require('../helpers');
const enums = require('../enums/enums');
module.exports =  function permit(...allowed) {
    const isAllowed = role => allowed.indexOf(role) > -1;
    
    // return a middleware
    return (request, response, next) => {
      console.log("request",request.user.role)
      if(request.user && isAllowed(request.user.role)){
        next();  //Pass to next middleware
      }else{
        let err = {statusCode:enums.statusCodes.badRequest,error:"Forbidden",message:"User is not authorized to access this resource"}
        return response.status(enums.statusCodes.badRequest).send(helpers.sendErrorJson(enums.statusCodes.badRequest, err));

      }
      
    }
  }