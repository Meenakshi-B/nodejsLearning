const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqid = require('uniqid');

const empSchema = new mongoose.Schema({
	 gender: { type: String },
     name: { type: String },
     dob: { type: String },

      empID: { type:String}, 
		
		});
var empdata = mongoose.model('school',empSchema,'school');
	   module.exports = empdata;
	   