const service = require("../services/emp_services")
module.exports.create_emp = function (req, res) {
    var testapp=req.body;
      console.log("data--------------->",testapp)
      service.create_emp(testapp , function(empdata) {
          if (empdata.error) {
        console.log("error occured",errors)
        }
       else
        res.send({
          empdata
        });
    }); console.log(" cntrl to service");
  } 
  
  module.exports.delete_emp = function (req, res) {
    
      var emp_id = req.params.id;
    
      service.delete_emp(emp_id, function (delete_emp) {
            var emp_id = req.params.id;
    
        if (delete_emp.errors) {
            console.log("error occured",errors)
           
        } else
        console.log("deleted",delete_emp)
            
          });
    
    }

    module.exports.findbyid_emp = function (req, res) {
        var emp_id = req.params.id;
          service.findbyid_emp (emp_id , function(empdata) {
              if (emp_id.error) {
                console.log("error occured",errors)
            
          } else
              res(empdata) 
            });
    
      }
        
        module.exports.update_emp = function (req,res){
          var testapp=req.body;
            service.update_emp(testapp,function(update_emp) {
                if (update_emp.error) {
                    console.log("error occured",errors)
              
            
          } else
            res.send(update_emp)
              
            });
    
      }
              
      
      module.exports.getall_emps = function (req, res){
        service.getall_emps(function(all_emps) {
          if (all_emps.errors) {
            console.log("error occured",errors)
          } else
            res(all_emps)
          });
          }
    
      

