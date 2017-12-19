var transaction_dao = require('../DAO/transaction_DAO');
module.exports.create_transaction = function (create_transaction,callback){
    transaction_dao.create_transaction(create_transaction,function(transdata){
        callback(transdata);
    })

} 

module.exports.update_transaction = function (update_transaction, callback) {

    transaction_dao.update_transaction(update_transaction, function (update_transaction) {
        callback(update_transaction);
    })
}
module.exports.delete_transaction = function (delete_transaction, callback) {

    transaction_dao.delete_transaction(delete_transaction, function (delete_transaction) {
        callback(delete_transaction);
    })
}
module.exports.findbyid_transaction = function (transaction_id, callback) {

    transaction_dao.findbyid_transaction(transaction_id, function (transdata) {
        callback(transdata);
        console.log("got service");
    }) 
} 


module.exports.getall_transactions = function (callback) {
    transaction_dao.getall_transactions(function (all_transactions) {
        callback(all_transactions);
    })
}
