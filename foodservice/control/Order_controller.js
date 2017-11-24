const service = require("../services/Order_service")

module.exports.delete_Order = function (req, res) {
    
      var Order_id = req.params.id;
    
      service.delete_Order(Order_id, function (delete_Order) {
            var Order_id = req.params.id;
    
        if (delete_Order.errors) {
            console.log("error occured",errors)
           
        } else
        console.log("deleted",delete_Order)
        
            
          });
    
    }

    module.exports.findbyid_Order = function (req, res) {
        var Order_id = req.params.id;
          service.findbyid_Order (Order_id , function(orderdata) {
              if (Order_id.error) {
                console.log("error occured",errors)
            
          } else
              res.send(orderdata) 
            });
    
      }
        
        module.exports.update_Order = function (req,res){
          var testapp=req.body;
            service.update_Order(testapp,function(update_Order) {
                if (update_Order.error) {
                    console.log("error occured",errors)
              
            
          } else
            res.send(update_Order)
              
            });
    
      }
              
      
      module.exports.getall_Orders = function (req, res){
        service.getall_Orders(function(all_Orders) {
          if (all_Orders.errors) {
            console.log("error occured",errors)
          } else
            res.send(all_Orders)
          });
          }
    
          module.exports.create_Order = function(req,res) {
            var testapp=req.body;
            console.log("trans data ----->",testapp)
            service.create_Order(testapp , function(orderdata){
                if (orderdata.error) {console.log("ERRORRRR",error)
            } else res.send( orderdata );
            });
        }
        

