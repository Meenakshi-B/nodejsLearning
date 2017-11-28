var Order_dao = require('../DAO/DAO');
module.exports.create_Order = function (create_Order,callback){
    Order_dao.create_Order(create_Order,function(orderdata){
        callback(orderdata);
    })

} 

module.exports.update_Order = function (update_Order, callback) {

    Order_dao.update_Order(update_Order, function (update_Order) {
        callback(update_Order);
    })
}
module.exports.delete_Order = function (delete_Order, callback) {

    Order_dao.delete_Order(delete_Order, function (delete_Order) {
        callback(delete_Order);
    })
}
module.exports.findbyid_Order = function (Order_id, callback) {

    Order_dao.findbyid_Order(Order_id, function (orderdata) {
        callback(orderdata)
        console.log("got service");
    }) 
} 


module.exports.getall_Orders = function (callback) {
    Order_dao.getall_Orders(function (all_Orders) {
        callback(all_Orders);
    })
}
