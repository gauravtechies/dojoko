/* eslint-disable global-require */
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const users = require('../helpers/auth.utility');
const helpers= require('../helpers')
const enums = require('../enums/enums');
const userDesc = require('../enums/responses.desc');
require('./auth');

const router = express.Router();

module.exports = () => {
  /** Routes */


  router.post('/v1/login', async (req, res, next) => {
    passport.authenticate('/v1/login', async (err, user, info) => {
      
      try {
        if (err) {
         const error = new Error( err);

          return next(error);
        }
        if (!user) {
            return res.status(enums.statusCodes.unAuthorized).send(helpers.sendErrorJson(enums.statusCodes.unAuthorized, [info.message]));
          // return next(info);
        }
        req.login(user, { session: false }, async (error) => {
          if (error) {
            return next("error",error);
          }
          var userData = {id:user.id,email:user.email,roleId:user.roleId,role:user.role.dataValues.role}
         
          const token = await users.tokenGeneration(userData);
         
          // const body = { id: user.id, email: user.email };
          // const token = jwt.sign({ user: body,role: user.role }, process.env.JWT_SECRET);
          return res.send(helpers.sendJson(token));
        });
      } catch (error) {
        return next(error);
      }
      return info;
    })(req, res, next);
  });

  return router;
};
