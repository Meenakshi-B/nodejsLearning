var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql/GuestSQL.properties');
module.exports.create_Guest = function (create_Guest, callback)
{
    var create_query = sqlQuery._properties.create_Guest;
    sequelize.query(create_query,{
        replacements: {
        
            Guestname : create_Guest.Guestname,
            
            email:create_Guest.email,

            password: create_Guest.password
          
          
        },
        type : sequelize.QueryTypes.INSERT,
        model : models.Guest
    }).then(function(Guestdata) {
        callback(Guestdata);
    });
}
module.exports.update_Guest = function(update_Guest,callback) {
    var update_query = sqlQuery._properties.update_Guest;
    sequelize.query(update_query, {
        replacements: {
            Guestname : create_Guest.bill,
            
            email:create_Guest.email,

            password: create_Guest.password
          
        }, type : sequelize.QueryTypes.INSERT,
        model : models.Guest
    })
        .then(function() {
            callback();
        });
}

module.exports.delete_Guest = function(_id,callback) {
    var delete_query = sqlQuery._properties.delete_Guest;
    sequelize.query(delete_query, {
      replacements: {
          id: _id
      },
      type : sequelize.QueryTypes.DELETE,
      model: models.Guest
    }).then(function() {
          callback();
      });
  } 
  module.exports.getall_Guest = function(callback) {
    var get_all_query = sqlQuery._properties.getall_Guest;
    sequelize.query(get_all_query, {
      type : sequelize.QueryTypes.SELECT,
      model: models.Guest
    }).then(function(all_Guests) {
          callback(all_Guests);
      });
  }
  module.exports.findbyid_Guest = function(Guest_id,callback) {
    var search_query = sqlQuery._properties.findbyid_Guest;
    sequelize.query(search_query, {
      replacements: {
           id:Guest_id
      },
      type : sequelize.QueryTypes.SELECT,
      model: models.Guest
    }).then(function(Guestdata) {
          callback(Guestdata);
      });
  } 