const express = require('express');
const passport = require('passport');
const permit = require("../../auth/permission");
const router = express.Router();

module.exports = (db, logger) => {
  const {
     post
  } = require('../../handlers/v1/dataStructure.handlers')(db, logger);

  /** Routes */
  router.post('/dataStructure', post);
  //router.get('/:id', getUser);
 
  return router;
};
