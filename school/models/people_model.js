const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const peopleSchema = new mongoose.Schema({
gender: { type: String },
name: { type: String },
dob: { type: Date },
address: { type: String }
 });
 
 var userdata = mongoose.model('user',peopleSchema,'user');
 module.exports = userdata; 
    

                              