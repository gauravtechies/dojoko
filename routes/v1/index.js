/* eslint-disable global-require */
const express = require('express');

const router = express.Router();
const passport = require('passport');

module.exports = (db, logger) => {
  router.get('/', (req, res) => {
    res.json({ msg: 'Welcome' });
  });


  router.use('/', require('./users')(db, logger));
  return router;
};
