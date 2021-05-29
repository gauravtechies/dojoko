const validator = require('validator').default;
const helpers = require('../../helpers');
const db = require('../../models');
const userValidations = require('../../validators/dataStructure.validations');
const enums = require('../../enums/enums');
const dbEnums = require('../../enums/db.models');
// const adminUserHelper = require('../../../helpers/v1/admin/users.helpers');
const userDesc = require("../../enums/responses.desc");
const myArray=[]
module.exports = (db, logger) => ({

    post: async (req, res) => {
         
        const errors = userValidations.validateArrayData(body);

        if (errors.length > 0) {
            res.statusCode = enums.statusCodes.badRequest;;
            return res.json(helpers.sendErrorJson(enums.statusCodes.badRequest, errors));
        }
        try{
                logger.info(req)
                const existingElement=myArray.indexOf(req.body.name)
                const entry=(existingElement>-1)?true:false;
                let responseObject={}
                if(!entry){
                    myArray.push(req.body.name)
                    responseObject={yourarray:myArray,count:myArray.length,position:myArray.lastIndexOf(req.body.name)}
                    return res.json(helpers.sendJson(responseObject));
                }else{
                    responseObject={yourarray:myArray,count:myArray.length,position:existingElement}
                    return res.json(helpers.sendJson(responseObject));
                }
            }catch(err){
                logger.error("err")
                const seqError = (err.errors && err.errors.length > 0) ? err.errors[0] : err;
                const errorResp = helpers.createError(seqError.path, seqError.message, seqError.type);
                return res.json(helpers.sendErrorJson(enums.statusCodes.internalServerError, [errorResp]));
            }
       
        
      
    }
});
