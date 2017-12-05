const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var format = require('date-format');

const customerschema = new mongoose.Schema({
    customername:{ type: String},
    orderdetail:{type: String},
    amount:{type: Number},
    orderdate:{type: Date , default : Date.now }
});

var customerdata = mongoose.model('boutique',customerschema,'boutique')
module.exports = customerdata;