'use strict';

module.exports = function(sequelize, DataTypes) {
  var Orderdata = sequelize.define("Order", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    bill: DataTypes.INTEGER,
    customercontact: DataTypes.INTEGER,
    customername: DataTypes.STRING,
    menu: DataTypes.STRING,
    address: DataTypes.STRING
  });
  return Orderdata;
}; 