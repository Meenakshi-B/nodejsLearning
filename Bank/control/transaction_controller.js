const service = require("../services/transaction_service")

module.exports.delete_transaction = function (req, res) {
    
      var transaction_id = req.params.id;
    
      service.delete_transaction(transaction_id, function (delete_transaction) {
            var transaction_id = req.params.id;
    
        if (delete_transaction.errors) {
            console.log("error occured",errors)
           
        } else
        console.log("deleted",delete_transaction)
        
            
          });
    
    }

    module.exports.findbyid_transaction = function (req, res) {
        var transaction_id = req.params.id;
          service.findbyid_transaction (transaction_id , function(transdata) {
              if (transaction_id.error) {
                console.log("error occured",errors)
            
          } else
              res.send(transdata) 
            });
    
      }
        
        module.exports.update_transaction = function (req,res){
          var testapp=req.body;
            service.update_transaction(testapp,function(update_transaction) {
                if (update_transaction.error) {
                    console.log("error occured",errors)
              
            
          } else
            res.send(update_transaction)
              
            });
    
      }
              
      
      module.exports.getall_transactions = function (req, res){
        service.getall_transactions(function(all_transactions) {
          if (all_transactions.errors) {
            console.log("error occured",errors)
          } else
            res.send(all_transactions)
          });
          }
    
          module.exports.create_transaction = function(req,res) {
            var testapp=req.body;
            console.log("trans data ----->",testapp)
            service.create_transaction(testapp , function(transdata){
                if (transdata.error) {console.log("ERRORRRR",error)
            } else res.send( transdata );
            });
        }
        

