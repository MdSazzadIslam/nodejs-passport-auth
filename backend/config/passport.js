const bcrypt = require("bcryptjs");
const authModel = require("../models/authModel");
const passport = require("passport");
const { model } = require("../models/authModel");
const localStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  authModel.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new localStrategy({ usernameField: "email" }, (email, password, done) => {
    authModel.findOne({ email: email }).then((user) => {
      const newUser = new authModel({ email, password });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              return done(null, user);
            })
            .catch((err) => {
              return done(null, false, { message: err });
            });
        });
      });
    });
  })
);
module.exports = passport;
