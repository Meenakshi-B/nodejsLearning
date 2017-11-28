
var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql/OrderSQL.properties');
module.exports.create_Order = function (create_Order, callback)
{
    var create_query = sqlQuery._properties.create_Order;
    sequelize.query(create_query,{
        replacements: {
        // 
            bill : create_Order.bill,
            customername : create_Order.customername,
            ,
            menu : create_Order.menu,
    
        },
        type : sequelize.QueryTypes.INSERT,
        model : models.Order
    }).then(function(Order) {
        callback(Order);
    });
}
module.exports.update_Order = function(update_Order,callback) {
    var update_query = sqlQuery._properties.update_Order;
    sequelize.query(update_query, {
        replacements: {
            id : update_Order.id,
            bill : update_Order.bill,
            customername : update_Order.customername,
            customercontact : update_Order.customercontact,
            menu : update_Order.menu,
            addressOne : update_Order.addressOne

        }, type : sequelize.QueryTypes.INSERT,
        model : models.Order
    })
        .then(function() {
            callback();
        });
}

module.exports.delete_Order = function(_id,callback) {
    var delete_query = sqlQuery._properties.delete_Order;
    sequelize.query(delete_query, {
      replacements: {
          id: _id
      },
      type : sequelize.QueryTypes.DELETE,
      model: models.Order
    }).then(function() {
          callback();
      });
  } 
  module.exports.getall_Orders = function(callback) {
    var get_all_query = sqlQuery._properties.getall_Orders;
    sequelize.query(get_all_query, {
      type : sequelize.QueryTypes.SELECT,
      model: models.Order
    }).then(function(all_Orders) {
          callback(all_Orders);
      });
  }
  module.exports.findbyid_Order = function(Order_id,callback) {
    var search_query = sqlQuery._properties.search_Order;
    sequelize.query(search_query, {
      replacements: {
           id:Order_id
      },
      type : sequelize.QueryTypes.SELECT,
      model: models.Order
    }).then(function(Order) {
          callback(Order);
      });
  } 