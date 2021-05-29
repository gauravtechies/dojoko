const validator = require('validator');
const helpers = require('../helpers');
const userDesc = require('../enums/responses.desc');
const enums = require('../enums/enums');

const isNullOrEmpty = data => {
  if (data && data != null && !validator.isEmpty(data.toString())) {
    return false;
  }

  return true;
};

exports.isNullOrEmpty = isNullOrEmpty;
// exports.isNullOrEmptyDirect = isNullOrEmptyDirect;

exports.validateInternal = (data, accu) => {
  if (data != null) accu.push(data);
};


exports.arrayData = arrayData => {
  if (isNullOrEmpty(arrayData)) {
    return helpers.createError(enums.params.arrayData, userDesc.arrayDataExist, enums.errorTypes.validation);
  }
 
  return null;
};

