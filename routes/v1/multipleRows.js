const express = require('express');
const router = express.Router();

module.exports = (db, logger) => {
  const {
     post
  } = require('../../handlers/v1/multipleRows.handler')(db, logger);

  /** Routes */
  router.post('/multipleRows', post);
 
  return router;
};
