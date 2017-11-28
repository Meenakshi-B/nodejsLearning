var Order_model = require("../models/Order_model");
module.exports.create_Order = function (create_Order, callback) {
   console.log("before  Order dao", create_Order);
    var orderdata = new Order_model(create_Order);
    console.log("Order dao", orderdata);
    orderdata.save(function (err) {
        if (err) {
            callback(err);
        } else {console.log("<<<no err>>>>");}
         console.log("------>created db")
        
        callback(orderdata);
        
    })
}
module.exports.findbyid_Order = function (Order_id, callback) {
   Order_model.findById(Order_id, function (err, orderdata) {
        if (err) {
            callback(err);
        } 
        else {
        callback(orderdata); }
        console.log("got in dao");
    }) 
}
module.exports.delete_Order = function (delete_Order, callback) {
   Order_model.findByIdAndRemove(delete_Order, function (err) {
        if (err) {
            callback(err);
        }
        callback({ message: "removed" });
    });
}

module.exports.update_Order = function (update_Order, callback) {
    Order_model.findOneAndUpdate(({_id : update_Order._id}),
        {
            $set: update_Order
        }, { upsert: true, new: true }, function(err, update_Order) {
            if (err) {
                callback(err);
            }
            callback(update_Order);
        });
}; 

module.exports.getall_Orders = function (callback) {
 Order_model.find().populate('Order_id').exec(function (err, all_Orders) {
   if (all_Orders.err) {
     callback(err);
   }
   else {
     callback(all_Orders);

   }
 });
};