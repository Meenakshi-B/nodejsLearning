var emp_model=require('../models/emp_model');
 module.exports.create_emp = function (create_emp, callback) {
     var empdata = new emp_model(create_emp);
     console.log("emp dao", empdata);
     empdata.save(function (err) {
         if (err) {
             callback(err);
         } else {console.log("no err");}
          console.log(empdata)
         callback(empdata);
		 
	 })
 }
 module.exports.findbyid_emp = function (emp_id, callback) {
    emp_model.findById(emp_id, function (err, empdata) {
         if (err) {
             callback(err);
         } 
         else {
         callback(empdata); }
         console.log("got in dao");
     }) 
 }
module.exports.delete_emp = function (delete_emp, callback) {
    emp_model.findByIdAndRemove(delete_emp, function (err) {
         if (err) {
             callback(err);
         }
         callback({ message: "removed" });
     });
 }
 
 module.exports.update_emp = function (update_emp, callback) {
     emp_model.findOneAndUpdate(({_id : update_emp.emp_id}),
         {
             $set: update_emp
         }, { upsert: true, new: true }, function(err, update_emp) {
             if (err) {
                 callback(err);
             }
             callback(update_emp);
         });
 }; 

 module.exports.getall_emps = function (callback) {
  emp_model.find().populate('emp_id').exec(function (err, all_emps) {
    if (all_emps.err) {
      callback(err);
    }
    else {
      callback(all_emps);

    }
  });
};