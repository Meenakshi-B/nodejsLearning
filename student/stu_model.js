const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const studentSchema = new mongoose.Schema({
  name: { type: String},
  address: { type: String },
   student_status: { type: Boolean, default: 'true' },
    student_id :{
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
      }
	  });
	  
	   var studentdata = mongoose.model('student',studentSchema,'student');
	   module.exports = studentdata;
   