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

module.exports.insertInMultipleRow=async(dbInsertionData,id)=>{
  const result = await db[model.multipleRowValues].create({ dataValue: dbInsertionData,type:typeof dbInsertionData,multipleRowId:id });
   if(result){
       return result;
   }
   return false;
}