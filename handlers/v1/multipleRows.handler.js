const helpers = require('../../helpers');
const userValidations = require('../../validators/dataStructure.validations');
const enums = require('../../enums/enums');
const serializationHelper = require('../../helpers/v1/serialization.helper');
const userDesc = require("../../enums/responses.desc");
const model = require("../../enums/db.models")
const dbEnums = require('../../enums/db.models');

module.exports = (db, logger) => ({

    post: async (req, res) => {

        //Validation of data 
        const errors = userValidations.validateArrayData(req.body);
        if (errors.length > 0) {
            res.statusCode = enums.statusCodes.badRequest;;
            return res.json(helpers.sendErrorJson(enums.statusCodes.badRequest, errors));
        }
        let insertRow=null;
        const myArray=[]
        try{
            //Check in Db if value exist
            
            const multipleDataTable = await db[model.multipleRows].findOne({
               where: { 
                 arrayName: 'myArray'
                },
                  include: [{
                      model:db[dbEnums.multipleRowValues],
                       multipleRowId: 1,
                       seperate:true
                  }],
                  
              
             });
             let arrayRows=multipleDataTable.dataValues.multipleRowValues;
            //  return res.send("hello")
            //If Value not exist
            if (arrayRows.length ==0 )  {
              
              insertRow=await serializationHelper.insertInMultipleRow(req.body.arrayData,multipleDataTable.dataValues.id);
              if(!insertRow){
                const errorResp = helpers.createError(enums.params.arrayValue,userDesc.dataNotUpdated, enums.errorTypes.serverError);
                return res.json(helpers.sendErrorJson(enums.statusCodes.internalServerError, [errorResp]));
              }
            
              responseObject={yourarray:myArray,count:myArray.length,position:myArray.lastIndexOf(req.body.arrayData)}
              return res.json(helpers.sendJson(responseObject));
            
            } else {
              //if value exist in db
              //check position of data
               for(i=0;i<arrayRows.length;i++){
                  if(arrayRows[i].dataValues.type=="number"){
                    var dataValueNumber = parseInt(arrayRows[i].dataValues.dataValue) 
                    myArray.push(dataValueNumber);
                  }else{
                    myArray.push(arrayRows[i].dataValues.dataValue);

                  }
                
               }

               const existingElement=myArray.indexOf(req.body.arrayData)
              const entry=(existingElement>-1)?true:false;
               
              //If value doesn't exist in array update array and store in db 
              if(!entry){
                     //Insert in db 
                     insertRow=await serializationHelper.insertInMultipleRow(req.body.arrayData,multipleDataTable.dataValues.id);
                      if(!insertRow){
                        const errorResp = helpers.createError(enums.params.arrayValue,userDesc.dataNotUpdated, enums.errorTypes.serverError);
                        return res.json(helpers.sendErrorJson(enums.statusCodes.internalServerError, [errorResp]));
                      }

                      //Return poistion, array, count if it exist
                      myArray.push(req.body.arrayData)
                      responseObject={yourarray:myArray,count:myArray.length,position:myArray.lastIndexOf(req.body.arrayData)}
                        return res.json(helpers.sendJson(responseObject));
                  }else{
                    //Return poistion, array, count if it exist
                      responseObject={yourarray:myArray,count:myArray.length,position:existingElement}
                      return res.json(helpers.sendJson(responseObject));
                  }
            }
                
            }catch(err){
                logger.error(err)
                const seqError = (err.errors && err.errors.length > 0) ? err.errors[0] : err;
                const errorResp = helpers.createError(seqError.path, seqError.message, seqError.type);
                return res.json(helpers.sendErrorJson(enums.statusCodes.internalServerError, [errorResp]));
            }
       
        
      
    }
});
