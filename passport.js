'use strict';

var passport = require('passport'),
  FacebookTokenStrategy = require('passport-facebook-token'),
  User = require('mongoose').model('User');

module.exports = function () {

  passport.use(new FacebookTokenStrategy({
      clientID: 'ID_FACEBOOK',
      clientSecret: 'SECRET_FACEBOOK'
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile)
      User.upsertFbUser(accessToken, refreshToken, profile, function(err, user) {
        return done(err, user);
      });
    }));

};