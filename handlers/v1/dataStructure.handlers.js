
const helpers = require('../../helpers');
const userValidations = require('../../validators/dataStructure.validations');
const enums = require('../../enums/enums');

const myArray=[]
module.exports = (db, logger) => ({

    post: async (req, res) => {
        //Validating incomeing data
        const errors = userValidations.validateArrayData(req.body); //Validating incoming data if it is empty
        if (errors.length > 0) {
            logger.error(`There is validation error ${JSON.stringify(errors)}`)
            res.statusCode = enums.statusCodes.badRequest;;
            return res.json(helpers.sendErrorJson(enums.statusCodes.badRequest, errors));
        }
        try{
                logger.info(`Body of dataStructure Handler ${req.body.arrayData}`)
                const existingElement=myArray.indexOf(req.body.arrayData) //Index of requested element 
                const entry=(existingElement>-1)?true:false; // If found true else false 
                let responseObject={}
                if(!entry){
                    logger.info(`Array don't have element requested in body`)
                    myArray.push(req.body.arrayData)
                    //Response object
                    responseObject={yourarray:myArray,count:myArray.length,position:myArray.lastIndexOf(req.body.arrayData)}
                    return res.json(helpers.sendJson(responseObject));
                }else{
                    //Response object
                    responseObject={yourarray:myArray,count:myArray.length,position:existingElement}
                    return res.json(helpers.sendJson(responseObject));
                }
            }catch(err){
                //500 Error 
                logger.error(`Error in dataStructure handler ${JSON.stringify(err)}`)
                const seqError = (err.errors && err.errors.length > 0) ? err.errors[0] : err;
                const errorResp = helpers.createError(seqError.path, seqError.message, seqError.type);
                return res.json(helpers.sendErrorJson(enums.statusCodes.internalServerError, [errorResp]));
            }
       
        
      
    }
});
