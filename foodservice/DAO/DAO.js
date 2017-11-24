var sequelize = models.sequalize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'./OrderSQL');
module.exports.create_Order = function (create_Order, callback)
{
    var create_query = sqlQuery._properties.create_Order;
    sequelize.query(create_query,{
        replacements: {
            bill : Order.bill,
            customername : Order.customername,
            customercontact : Order.customercontact,
            menu : Order.menu,
            address : Order.address
        },
        type : sequalize.QueryTypes.INSERT,
        model : models.Order
    }).then(function(Orderdata) {
        callback(Orderdata);
    });
}
module.exports.update_Order = function(update_Order,callback) {
    var update_query = sqlQuery._properties.update_Order;
    sequalize.query(update_query, {
        replacements: {
            id : Order.id,
            bill : Order.bill,
            customername : Order.customername,
            customercontact : Order.customercontact,
            menu : Order.menu,
            address : Order.address

        }, type : sequalize.QueryTypes.INSERT,
        model : models.Order
    })
        .then(function() {
            callback();
        });
}

module.exports.delete_Order = function(Order_id,callback) {
    var delete_query = sqlQuery._properties.delete_Order;
    sequelize.query(delete_query, {
      replacements: {
          id: Order_id
      },
      type : sequelize.QueryTypes.DELETE,
      model: models.Order
    }).then(function() {
          callback();
      });
  }
  module.exports.get_all_Order = function(callback) {
    var get_all_query = sqlQuery._properties.get_all_Order;
    sequelize.query(get_all_query, {
      type : sequelize.QueryTypes.SELECT,
      model: models.Order
    }).then(function(Orderdata) {
          callback(Orderdata);
      });
  }
  module.exports.search_Order = function(Order_id,callback) {
    var search_query = sqlQuery._properties.search_Order;
    sequelize.query(search_query, {
      replacements: {
           id:Order_id
      },
      type : sequelize.QueryTypes.SELECT,
      model: models.Order
    }).then(function(Orderdata) {
          callback(Orderdata);
      });
  } 