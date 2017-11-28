'use strict';


module.exports = function(sequelize, Datatypes){
  const Order = sequelize.define("food",{
    id: {
    	type : DataTypes.UUID,
    	primaryKey : true,
      defaultValue : DataTypes.UUIDV4,
      allowNull: false
    },
    menu: DataTypes.STRING,
    bill: DataTypes.INTEGER
  });
return Order;


};
