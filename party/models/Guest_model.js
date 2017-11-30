var Sequelize = require('sequelize')

module.exports = function(sequelize, DataTypes) {
    var Guestdata = sequelize.define("guest",{
      Guestname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
    
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }},
  password: {
    type: Sequelize.STRING,
  },
  
});
}