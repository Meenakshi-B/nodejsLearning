var customer_model = require("../models/customer_model");
module.exports.create_customer = function (create_customer, callback) {
    var customerdata = new customer_model(create_customer);
    console.log("customer dao", customerdata);
    customerdata.save(function (err) {
        if (err) {
            callback(err);
        } else {console.log("<<<no err>>>>");}
         console.log("------>created db")
        
        callback(customerdata);
        
    })
}
module.exports.findbyid_customer = function (customer_id, callback) {
   customer_model.findById(customer_id, function (err, customerdata) {
        if (err) {
            callback(err);
        } 
        else {
        callback(customerdata); }
        console.log("got in dao");
    }) 
}
module.exports.delete_customer = function (delete_customer, callback) {
   customer_model.findByIdAndRemove(delete_customer, function (err) {
        if (err) {
            callback(err);
        }
        callback({ message: "removed" });
    });
}

module.exports.update_customer = function (update_customer, callback) {
    customer_model.findOneAndUpdate(({_id : update_customer._id}),
        {
            $set: update_customer
        }, { upsert: true, new: true }, function(err, update_customer) {
            if (err) {
                callback(err);
            }
            callback(update_customer);
        });
}; 

module.exports.getall_customers = function (callback) {
 customer_model.find().populate('customer_id').exec(function (err, all_customers) {
   if (all_customers.err) {
     callback(err);
   }
   else {
     callback(all_customers);

   }
 });
};