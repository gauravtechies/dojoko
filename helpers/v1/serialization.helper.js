const db= require("../../models")
const model = require("../../enums/db.models")
module.exports.updateSerialization=async(dbInsertionData)=>{
   let updateResult= await db[model.serialization].update({ arrayValue: dbInsertionData }, {
        where: {
          arrayName: 'myArray'
        }
      });
    if(updateResult){
        return true;
    }
    return false;
}