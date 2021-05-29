const validator = require('validator').default;
const helpers = require('../../../helpers');
const db = require('../../../models');
const userValidations = require('../../../validators/user.validations');
const enums = require('../../../enums/enums');
const dbEnums = require('../../../enums/db.models');
// const adminUserHelper = require('../../../helpers/v1/admin/users.helpers');
const userDesc = require("../../../enums/responses.desc");
const myarray=[]
module.exports = (db, logger) => ({
    post: async (req, res) => {
        try{logger.info(req)
                const existingElement=myarray.indexOf(req.body.name)
                const entry=(existingElement>-1)?true:false;
                let responseObject={}
                if(!entry){
                    myarray.push(req.body.name)
                    responseObject={yourarray:myarray,count:myarray.length,position:myarray.lastIndexOf(req.body.name)}
                    return res.json(helpers.sendJson(responseObject));
                }else{
                    responseObject={yourarray:myarray,count:myarray.length,position:existingElement}
                    return res.json(helpers.sendJson(responseObject));
                }
            }catch(err){
                const seqError = (err.errors && err.errors.length > 0) ? err.errors[0] : err;
                const errorResp = helpers.createError(seqError.path, seqError.message, seqError.type);
                return res.json(helpers.sendErrorJson(enums.statusCodes.internalServerError, [errorResp]));
            }
       
        
      
    }
});
