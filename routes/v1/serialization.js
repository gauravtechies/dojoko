const express = require('express');
const router = express.Router();

module.exports = (db, logger) => {
  const {
     post
  } = require('../../handlers/v1/serialization.handlers')(db, logger);

  /** Routes */
  router.post('/serialization', post);
 
  return router;
};
