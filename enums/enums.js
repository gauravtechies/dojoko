'use strict'

const errorTypes = {
  validation: 'validation',
  unAuthorized: 'UnAuthorized',
  serverError: 'server_error',
  error: 'error',
  length: 'length',
  conflict: 'alreadyExist',
  notFound:'notFound'
};


const statusCodes = {
  ok: '200',
  unAuthorized: '401',
  badRequest: '403',
  internalServerError: '500',
  notFound: '404',
  conflict:'409'
};


const params = {
  arrayData:"arrayData",
  arrayValue:"arrayValue"
};


const responseContentTypes = {
  json: 'json'
};





module.exports = {
  errorTypes,
  statusCodes,
  params,
  responseContentTypes
};
