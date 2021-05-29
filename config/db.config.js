const dbEnum = require("../enums/db.mode");
require('dotenv').config()
const config = {
  useConfig:process.env.NODE_ENV,
  dev: {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "dialect": process.env.DB_DIALECT,
      "port":process.env.DB_PORT
    },
    test: {
      "username": process.env.DB_TEST_USER,
      "password": process.env.DB_TEST_PASS,
      "database": process.env.DB_TEST_NAME,
      "host": process.env.DB_TEST_HOST,
      "dialect": process.env.DB_TEST_DIALECT,
      "port":process.env.DB_TEST_PORT
    },
    prod: {
      "username": process.env.DB_PRODUCTION_USER,
      "password": process.env.DB_PRODUCTION_PASS,
      "database": process.env.DB_PRODUCTION_NAME,
      "host": process.env.DB_PRODUCTION_HOST,
      "dialect": process.env.DB_PRODUCTION_DIALECT,
      "port":process.env.DB_PRODUCTION_PORT
    }
}

var currentConfig = {};
if(config.useConfig == dbEnum.development){
    currentConfig = config.dev;
} else if(config.useConfig == dbEnum.production){
    currentConfig = config.prod;
} else if(config.useConfig == dbEnum.test){
    currentConfig = config.test;
}

module.exports = currentConfig;
