const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const studentSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  address: { type: String, default: '' },
   student_status: { type: Boolean, default: 'true' },
    student_id :{
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
      }
	  });
	  
	   var student_data = mongoose.model('student',studentSchema,'student');
	   module.exports = student_data;
   