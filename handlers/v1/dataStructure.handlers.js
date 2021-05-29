
const helpers = require('../../helpers');
const userValidations = require('../../validators/dataStructure.validations');
const enums = require('../../enums/enums');

const myArray=[]
module.exports = (db, logger) => ({

    post: async (req, res) => {
        const errors = userValidations.validateArrayData(req.body);
        if (errors.length > 0) {
            res.statusCode = enums.statusCodes.badRequest;;
            return res.json(helpers.sendErrorJson(enums.statusCodes.badRequest, errors));
        }
        try{
                const existingElement=myArray.indexOf(req.body.arrayData)
                const entry=(existingElement>-1)?true:false;
                let responseObject={}
                if(!entry){
                    myArray.push(req.body.arrayData)
                    responseObject={yourarray:myArray,count:myArray.length,position:myArray.lastIndexOf(req.body.arrayData)}
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
