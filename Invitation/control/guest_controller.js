const tls = require('tls');
const service = require("../services/guest_service")
var nodemailer = require('nodemailer')
var async = require('async')

module.exports.delete_guest = function (req, res) {
    
      var guest_id = req.params.id;
    
      service.delete_guest(guest_id, function (delete_guest) {
            var guest_id = req.params.id;
    
        if (delete_guest.errors) {
            console.log("error occured",errors)
           
        } else
        console.log("deleted",delete_guest)
        
            
          });
    
    }

    module.exports.findbyid_guest = function (req, res) {
        var guest_id = req.params.id;
          service.findbyid_guest (guest_id , function(guestdata) {
              if (guest_id.error) {
                console.log("error occured",errors)
            
          } else
              res.send(guestdata) 
            });
    
      }
        
        module.exports.update_guest = function (req,res){
          var testapp=req.body;
            service.update_guest(testapp,function(update_guest) {
                if (update_guest.error) {
                    console.log("error occured",errors)
              
            
          } else
            res.send(update_guest)
              
            });
    
      }
              
      
      module.exports.getall_guests = function (req, res){
        service.getall_guests(function(all_guests) {
          if (all_guests.errors) {
            console.log("error occured",errors)
          } else
          async.forEachOf(all_guests, function (guestdata, guest) {
            console.log("Student mail id  - -----> ", guestdata.email);
    
            var mailOptions = {
                from: 'b.meenakshi.10decoders@gmail.com',
                to: guestdata.email,
                subject: 'invite',
                text: 'come for function'
            };
    
            mail.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
          })
          })
    
          module.exports.create_guest = function(req,res) {
            var testapp=req.body;
            console.log("trans data ----->",testapp)
            service.create_guest(testapp , function(guestdata){
                if (guestdata.error) {console.log("ERRORRRR",error)
            } else res.send( guestdata );
            });
        }
        
        module.exports.sendinvite_guest = function (req, res) {
          var guest_id = req.params.id;
          console.log("---------------------",guest_id)
            service.findbyid_guest (guest_id , function(guestdata) {
                if (guest_id.error) {
                  console.log("error occured",error)
              
            } else{
            
              process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 
            var mail = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                  user: 'b.meenakshi.10decoders@gmail.com',
                  pass: '87MeenuVivek'
              }
            })
              tls: {
                rejectUnauthorized: false
            } 

          
          var mailOptions = {
            from: 'b.meenakshi.10decoders@gmail.com',
            to:guestdata.email,
            subject: 'hai veka',
            text: 'can v go to dinner out '
        } 
       
        mail.sendMail(mailOptions, function (error, info) {
          if (error) {
              console.log(error);
          } else {
              console.log('Email sent: ' + info.response);
          }
      });

                }    });
      
        };
        
