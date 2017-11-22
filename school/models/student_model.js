const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const studentSchema = new mongoose.Schema({
      studentID: { type: mongoose.Schema.Types.ObjectId,
          index: true,
        required: true,
         auto: true
         }, 
		standard: { type: Number },
		section: { type: String },
		attendanceper: { type: Number },
		marksper: { type: Number }
		});
var studentdata = mongoose.model('student',studentSchema,'student');
	   module.exports = studentdata;		
		
		
