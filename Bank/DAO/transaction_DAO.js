var transaction_model = require("../models/transaction_model");
module.exports.create_transaction = function (create_transaction, callback) {
   console.log("before  transaction dao", create_transaction);
    var transdata = new transaction_model(create_transaction);
    console.log("transaction dao", transdata);
    transdata.save(function (err) {
        if (err) {
            callback(err);
        } else {console.log("<<<no err>>>>");}
         console.log("------>created db")
        
        callback(transdata);
        
    })
}
module.exports.findbyid_transaction = function (transaction_id, callback) {
   transaction_model.findById(transaction_id, function (err, transdata) {
        if (err) {
            callback(err);
        } 
        else {
        callback(transdata); }
        console.log("got in dao");
    }) 
}
module.exports.delete_transaction = function (delete_transaction, callback) {
   transaction_model.findByIdAndRemove(delete_transaction, function (err) {
        if (err) {
            callback(err);
        }
        callback({ message: "removed" });
    });
}

module.exports.update_transaction = function (update_transaction, callback) {
    transaction_model.findOneAndUpdate(({_id : update_transaction._id}),
        {
            $set: update_transaction
        }, { upsert: true, new: true }, function(err, update_transaction) {
            if (err) {
                callback(err);
            }
            callback(update_transaction);
        });
}; 

module.exports.getall_transactions = function (callback) {
 transaction_model.find().populate('transaction_id').exec(function (err, all_transactions) {
   if (all_transactions.err) {
     callback(err);
   }
   else {
     callback(all_transactions);

   }
 });
};