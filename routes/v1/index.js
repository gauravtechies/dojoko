/* eslint-disable global-require */
const express = require('express');

const router = express.Router();

module.exports = (db, logger) => {
  router.get('/', (req, res) => {
    res.json({ msg: 'Welcome' });
  });
  router.use('/', require('./dataStructure')(db, logger));
  router.use('/', require('./serialization')(db, logger));
  router.use('/', require('./multipleRows')(db, logger));
  return router;
};
