const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const guestschema = new mongoose.Schema({
    guestname:{ type: String},
    email:{type: String},
    contact:{type: String}
});

var guestdata = mongoose.model('invite',guestschema,'invite')
module.exports = guestdata; 