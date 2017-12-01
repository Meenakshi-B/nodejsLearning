'use strict';

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    username: {
    	type : DataTypes.STRING,
    	primaryKey : true
    },
    password: DataTypes.STRING,
    enabled: DataTypes.INTEGER,
  },{
    timestamps: false,
    instanceMethods: {
      toJSON: function () {
        var values = Object.assign({}, this.get());

        delete values.password;
        delete values.enabled;
        delete values.id;
        return values;
      }
    }
  });
  return Users;
};
