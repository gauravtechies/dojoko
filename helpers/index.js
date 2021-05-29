'use strict';
const contentTypes = require('../enums/enums');
const statusCodes = require('../enums/enums');

module.exports = {
  createError(fieldName, desc, type, error) {
    const commonError = {
      type: 'Unauthorized',
      desc: '',
      fieldName: ''
    };
    let suppliedError = error;
    if (!error) suppliedError = commonError;
    if (desc) suppliedError.desc = desc;
    if (fieldName) suppliedError.fieldName = fieldName;
    if (type) suppliedError.type = type;
    return suppliedError;
  },

  respond(statusCode, contentType, success, message, data, error) {
    if (typeof success === 'number') {
      success = Boolean(success);
    } else if (typeof success === 'string') {
      success = success === 'true';
    }
    const obj = {};
    obj.success = success;
    obj.message = message;
    if (data) {
      obj.response = data;
    }
    if (error) {
      obj.error = error;
    }
    return obj;
  },

  sendJson(response, successFlag, statusCode, message) {
    
    const getSuccessFlag = successFlag || true;
    return this.respond(statusCode || statusCodes.statusCodes.ok, contentTypes.responseContentTypes.json, getSuccessFlag, message, response, null);
  },

  sendErrorJson(statusCode, error, errorFlag, message) {
    const getErrorFlag = errorFlag || false;
    return this.respond(statusCode, contentTypes.responseContentTypes.json, getErrorFlag, message, null, error);
  }
};
