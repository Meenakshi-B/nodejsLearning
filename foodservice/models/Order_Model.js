'use strict';

module.exports = function(sequelize, DataTypes) {
  var Orderdata = sequelize.define("food", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    bill: DataTypes.INTEGER,
    customercontact: DataTypes.STRING,
    customername: DataTypes.STRING,
    menu: DataTypes.STRING,
    addressOne: DataTypes.STRING
  });
  return Orderdata;
}; 