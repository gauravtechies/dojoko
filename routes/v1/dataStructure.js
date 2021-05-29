const express = require('express');
const router = express.Router();

module.exports = (db, logger) => {
  const {
     post
  } = require('../../handlers/v1/dataStructure.handlers')(db, logger);

  /** Routes */
  router.post('/dataStructure', post);
 
  return router;
};
