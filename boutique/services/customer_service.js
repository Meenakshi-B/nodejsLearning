var customer_dao = require('../DAO/customer_DAO');
module.exports.create_customer = function (create_customer,callback){
    customer_dao.create_customer(create_customer,function(customerdata){
        callback(customerdata);
    })

} 


module.exports.update_customer = function (update_customer, callback) {

    customer_dao.update_customer(update_customer, function (update_customer) {
        callback(update_customer);
    })
}
module.exports.delete_customer = function (delete_customer, callback) {

    customer_dao.delete_customer(delete_customer, function (delete_customer) {
        callback(delete_customer);
    })
}
module.exports.findbyid_customer = function (customer_id, callback) {

    customer_dao.findbyid_customer(customer_id, function (customerdata) {
        callback(customerdata);
        console.log("got service");
    }) 
} 


module.exports.getall_customers = function (callback) {
    customer_dao.getall_customers(function (all_customers) {
        callback(all_customers);
    })
}
