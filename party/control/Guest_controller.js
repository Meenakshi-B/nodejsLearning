const bluebird = require('bluebird');
const crypto = bluebird.promisifyAll(require('crypto'));
const nodemailer = require('nodemailer');
const graph = require('fbgraph');
const passport = require('passport');
var jsonwebtoken = require("jsonwebtoken");
var winston = require('winston')
const service = require("../services/Guest_service")
const wrapper = require("../wrapper/wrapper")

exports.logout = (req, res) => {
    req.logout();
    res.status(200).send({
      message: wrapper.LoggedOut
    })
  };
  exports.postSignup = (req, res, next) => {
  
    const user = new User({
      email: req.body.email,
      password: req.body.password
    });
  
    User.findOne({ email: req.body.email }, (err, existingUser) => {
      if (err) { return next(err); }
      if (existingUser) {
        return res.json({ message: "Already email exists" })
      }
      user.save((err) => {
        winston.info('saved')
        if (err) { res.json({ message: "Failed" }) }
        req.logIn(user, (err) => {
          if (err) {
            res.json({ message: "Failed" })
          }
          res.json({ message: "Account Created Successfully" })
        });
      });
    });
  };
  
  exports.postLogin = (req, res, next) => {
  
    passport.authenticate('local', (err, user, info) => {
      if (err) { return res.json({ message: "Error Logging In" }) }
      if (!user) {
        return res.json({ message: "You are not a user" })
      }
      req.logIn(user, (err) => {
        if (err) { res.json({ message: "Error Logging In" }) }
        res.json({
          status: wrapper.SuccessStatus,
          code: wrapper.SuccessCode,
          result: {
            token: jsonwebtoken.sign({ email: user.email, _id: user._id }, 'RESTFULAPIs'),
            user: user.toJSON()
          }
        });
      });
    })(req, res, next);
  };
  
  








module.exports.delete_Guest = function (req, res) {
    
      var Guest_id = req.params.id;
    
      service.delete_Guest(Guest_id, function (delete_Guest) {
            var Guest_id = req.params.id;
    
        if (delete_Guest.errors) {
            console.log("error occured",errors)
           
        } else
        console.log("deleted",delete_Guest)
        
            
          });
    
    }

    module.exports.findbyid_Guest = function (req, res) {
        var Guest_id = req.params.id;
          service.findbyid_Guest (Guest_id , function(Guestdata) {
              if (Guest_id.error) {
                console.log("error occured",errors)
            
          } else
              res.send(Guestdata) 
            });
    
      }
        
        module.exports.update_Guest = function (req,res){
          var testapp=req.body;
            service.update_Guest(testapp,function() {
            res.end()
              
            });
    
      }
              
      
      module.exports.getall_Guests = function (req, res){
        service.getall_Guests(function(all_Guests) {
          if (all_Guests.errors) {
            console.log("error occured",errors)
          } else
            res.send(all_Guests)
          });
          }
    
          module.exports.create_Guest = function(req,res) {
            var testapp=req.body;
            console.log("trans data ----->",testapp)
            service.create_Guest(testapp , function(Guestdata){
              
             if (Guestdata.error) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result: Guestdata.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: Guestdata
      });
  }); console.log(" cntrl to service");
} 
            
            

