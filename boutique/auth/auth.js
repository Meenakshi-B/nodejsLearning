var passport = require("passport");  
var passportJWT = require("passport-jwt");  
var models = require("../models/designer_model");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/node";
var config = require('../config.json').jwt;
var ExtractJwt = passportJWT.ExtractJwt;  
var Strategy = passportJWT.Strategy;  
var params = {  
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

module.exports = function() {  
    var strategy = new Strategy(params, function(payload, done) {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            console.log("---->",payload.id);
          db.collection("design").findOne( { where : {_id : payload.id}} ).then(function(data) {
            console.log("--->",data);
            var user = data;
            if(user) {
                return done(null, {
                    id: user._id
                });
            } else {
                return done(new Error("User not found"), null);
            }
        });
    });
})

    passport.use(strategy);
    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", config.jwtSession);
        }
    };
};