'use strict'

const Sequelize = require('sequelize');  
const env = require('./env');  
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {  
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});


const db = {};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;


db.Order = require('../models/Order_Model.js')(sequelize, Sequelize);  
db.Customer = require('../models/Customer_Model.js')(sequelize, Sequelize);  
db.posts = require('../models/posts.js')(sequelize, Sequelize);

db.Order.belongsTo(db.Customer);  


module.exports = db;  
