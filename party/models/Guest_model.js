'use strict';
var Sequelize = require('sequelize');
var passportLocalSequelize = require('passport-local-sequelize');
var config    = require('../config/config.json').database;
var sequelize = new Sequelize(config.name, config.username, config.password, config);


module.exports = function(sequelize, Sequelize) {
    var Guestdata = passportLocalSequelize.define("guest",{
      Guestname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },id: {
    type : Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement : true
},
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }},
  password: {
    type: Sequelize.STRING,
  }} ,{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  }

);
return Guestdata;
};