const passport = require('passport');
var model = require("../models");
const request = require('request');
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(Guestname, password, done) {
    Model.guest.findOne({
      where: {
        'Guestname': Guestname
      }
    }).then(function (Guest) {
      if (Guest == null) {
        return done(null, false, { message: 'Incorrect credentials.' })
      }
        
      var hashedPassword = bcrypt.hashSync(password, Guest.salt)
        
      if (Guest.password === hashedPassword) {
        return done(null, Guest)
      } 
        
      return done(null, false, { message: 'Incorrect credentials.' })
    })
  }
))  