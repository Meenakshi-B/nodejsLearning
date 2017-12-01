const bluebird = require('bluebird');
const crypto = bluebird.promisifyAll(require('crypto'));
const nodemailer = require('nodemailer');
const graph = require('fbgraph');
const passport = require('passport');
const User = require('../models/Guest_model');
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
  
module.exports.delete_Guest = function (req, res) {
    
      var Guest_id = req.params.id;
    
      service.delete_Guest(Guest_id, function (delete_Guest) {
            var Guest_id = req.params.id;
    
        if (Guest_id.error) {
            console.log("error occured")
           
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
              
      
      module.exports.getall_Guest = function (req, res){
        service.getall_Guest(function(all_Guests) {
          if (all_Guests.errors) {
            console.log("error occured",errors)
          } else
            res.send(all_Guests)
          });
          }
    
          exports.create_Guest = function(req,res) {
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
            
module.exports.loginRequired = function (req, res, next) {
    if (req.user) {
      next();
    } else {
      return res.status(401).json({
        status: "Failed",
        code: "404",
        result: {
          message: wrapper.JWTAuth
        }
      })
    }
  }            

