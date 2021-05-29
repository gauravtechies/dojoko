const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { Strategy: JwtStrategy } = require('passport-jwt');
const { ExtractJwt } = require('passport-jwt');
const helpers = require('../helpers');
const userValidations = require('../validators/user.validations');
const enums = require('../enums/enums');
const userDesc = require('../enums/responses.desc');
const db = require('../models');

passport.use(
  new JwtStrategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        token;
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
      return done;
    }
  )
);


passport.use(
  '/v1/login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user =await db.user.findOne({where:{email}, include: db.roles})
        if (!user) {
          const errorResp = helpers.createError(enums.params.email,userDesc.emailNotExist, enums.errorTypes.unAuthorized);
        
          return done(null, false, { message: errorResp });
        }
        // console.log(user.role.dataValues.role);

        const validate = await user.validatePassword(password);

        if (!validate) {
          const errorResp = helpers.createError(enums.params.password, userDesc.passwordNotExist, enums.errorTypes.unAuthorized);

          return done(null, false, { message:errorResp  });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);
