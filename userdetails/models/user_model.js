const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var format = require('date-format');

const userschema = new mongoose.Schema({
    username:{ type: String},
    dob:{type: Date},
    createdate:{type: Date , default : Date.now }
});

var userdata = mongoose.model('date',userschema,'date')
module.exports = userdata;