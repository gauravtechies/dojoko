const commonValidations = require('./index');
const enums = require('../enums/enums');
//Registration validation
exports.validateArrayData = body => {
  const error = [];
  commonValidations.validateInternal(commonValidations.arrayData(body[enums.params.arrayData]), error);
  
  return error;
};

