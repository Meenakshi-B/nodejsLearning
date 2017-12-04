const service = require("../services/customer_service")

module.exports.delete_customer = function (req, res) {
    
      var customer_id = req.params.id;
    
      service.delete_customer(customer_id, function (delete_customer) {
            var customer_id = req.params.id;
    
        if (delete_customer.errors) {
            console.log("error occured",errors)
           
        } else
        console.log("deleted",delete_customer)
        
            
          });
    
    }

    module.exports.findbyid_customer = function (req, res) {
        var customer_id = req.params.id;
          service.findbyid_customer (customer_id , function(customerdata) {
              if (customer_id.error) {
                console.log("error occured",errors)
            
          } else
              res.send(customerdata) 
            });
    
      }
        
        module.exports.update_customer = function (req,res){
          var testapp=req.body;
            service.update_customer(testapp,function(update_customer) {
                if (update_customer.error) {
                    console.log("error occured",errors)
              
            
          } else
            res.send(update_customer)
              
            });
    
      }
              
      
      module.exports.getall_customers = function (req, res){
        service.getall_customers(function(all_customers) {
          if (all_customers.errors) {
            console.log("error occured",errors)
          } else
            res.send(all_customers)
          });
          }
    
          module.exports.create_customer = function(req,res) {
            var testapp=req.body;
            console.log("trans data ----->",testapp)
            service.create_customer(testapp , function(customerdata){
                if (customerdata.error) {console.log("ERRORRRR",error)
            } else res.send( customerdata );
            });
        }
        

