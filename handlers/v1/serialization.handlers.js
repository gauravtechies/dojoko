const helpers = require('../../helpers');
const userValidations = require('../../validators/dataStructure.validations');
const enums = require('../../enums/enums');
const serializationHelper = require('../../helpers/v1/serialization.helper');
const userDesc = require("../../enums/responses.desc");
const model = require("../../enums/db.models")


module.exports = (db, logger) => ({

    post: async (req, res) => {
      logger.info(`I am in serialization Handlers`)
        //Validation of data 
        const errors = userValidations.validateArrayData(req.body);
        if (errors.length > 0) {
          logger.error(`There is validation error ${JSON.stringify(errors)}`)
            res.statusCode = enums.statusCodes.badRequest;;
            return res.json(helpers.sendErrorJson(enums.statusCodes.badRequest, errors));
        }
        const myArray=[]
        let dbInsertionData=null;
        let updateResponse=null;
        try{
              logger.info(`Data Sent by user ${JSON.stringify(req.body)}`)
            //Check in Db if value exist
            const serializationTable = await db[model.serialization].findOne({ where: { arrayName: 'myArray' },raw:true });
            //If Value not exist
            if (serializationTable.arrayValue === null ||serializationTable.arrayValue === '' )  {
                myArray.push(req.body.arrayData)
                dbInsertionData=JSON.stringify(myArray)
                updateResponse=await serializationHelper.updateSerialization(dbInsertionData);
             if(!updateResponse){
                logger.error(`error in ${updateResponse}`)
                const errorResp = helpers.createError(enums.params.arrayValue,userDesc.dataNotUpdated, enums.errorTypes.serverError);
                return res.json(helpers.sendErrorJson(enums.statusCodes.internalServerError, [errorResp]));
              }
              responseObject={yourarray:myArray,count:myArray.length,position:myArray.lastIndexOf(req.body.arrayData)}
              return res.json(helpers.sendJson(responseObject));
            
            } else {
              //if value exist in db
              const arrayFromDb=JSON.parse(serializationTable.arrayValue);
              //check position of data
              const existingElement=arrayFromDb.indexOf(req.body.arrayData)
              const entry=(existingElement>-1)?true:false;
               
              //If value doesn't exist in array update array and store in db 
              if(!entry){
                      arrayFromDb.push(req.body.arrayData)
                      dbInsertionData=JSON.stringify(arrayFromDb)
                      //Update db if value is not in array 
                      updateResponse=await serializationHelper.updateSerialization(dbInsertionData);
                      if(!updateResponse){
                        logger.error(`error in ${updateResponse}`)
                        const errorResp = helpers.createError(enums.params.arrayValue,userDesc.dataNotUpdated, enums.errorTypes.serverError);
                        return res.json(helpers.sendErrorJson(enums.statusCodes.internalServerError, [errorResp]));
                      }
                      //Return poistion, array, count if it exist
                      responseObject={yourarray:arrayFromDb,count:arrayFromDb.length,position:arrayFromDb.lastIndexOf(req.body.arrayData)}
                        return res.json(helpers.sendJson(responseObject));
                  }else{
                    //Return poistion, array, count if it exist
                      responseObject={yourarray:arrayFromDb,count:arrayFromDb.length,position:existingElement}
                      return res.json(helpers.sendJson(responseObject));
                  }
            }
                
            }catch(err){
                logger.error(`I am in serialization handler ${JSON.stringify(err)}`)
                const seqError = (err.errors && err.errors.length > 0) ? err.errors[0] : err;
                const errorResp = helpers.createError(seqError.path, seqError.message, seqError.type);
                return res.json(helpers.sendErrorJson(enums.statusCodes.internalServerError, [errorResp]));
            }
       
        
      
    }
});
