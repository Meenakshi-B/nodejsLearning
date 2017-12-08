const service = require("../services/guest_service")
var nodemailer = require('nodemailer')

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
            res.send(all_guests)
          });
          }
    
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
              
            var mail = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                  user: 'meenu7592@gmail.com',
                  pass: '87MeenuVivek'
              } 

          }) 
          var mailOptions = {
            from: 'meenu7592@gmail.com',
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
      
        }
        
