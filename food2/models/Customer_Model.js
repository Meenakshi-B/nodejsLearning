'use strict';

module.exports.Customer = function(sequelize, DataTypes) {
  var Customer = sequelize.define("customer", { 
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      Order_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
    customercontact: DataTypes.STRING,
    customername: DataTypes.STRING,
    addressOne: DataTypes.STRING
  });
  return Customer;
}; 