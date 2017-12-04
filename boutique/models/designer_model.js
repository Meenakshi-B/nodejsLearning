const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const designerschema = new mongoose.Schema({
    designername:{ type: String},
    password:{type: String}
    
});

var designerdata = mongoose.model('boutique',designerschema,'boutique')
module.exports = designerdata;