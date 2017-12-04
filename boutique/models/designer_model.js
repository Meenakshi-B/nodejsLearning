const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const designerschema = new mongoose.Schema({
    username:{ type: String},
    password:{type: String},

});

    

var design = mongoose.model('design',designerschema,'design')
module.exports = design;
return design;