const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const transactionschema = new mongoose.Schema({
    accoutnumber:{ type: String},
    accoutholder:{type: String},
    amount:{type: Number},
    transactiondate:{type: Date , default : Date.now }
});

var transdata = mongoose.model('bank',transactionschema,'bank')
module.exports = transdata;