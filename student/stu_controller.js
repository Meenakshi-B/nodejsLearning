//const User = require('./stu_model');
const service = require("./stu_Service")
module.exports.delete_student = function (req, res) {

  var student_id = req.params.id;

  service.delete_student(student_id, function (deleted_student) {


    if (detail_id.errors) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result: deleted_student.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: deleted_student
      });
  });
}

module.exports.create_student = function (req, res) {
  var testapp=res.body;
	
	service.create_student(testapp , function(studentdata) {
		if (errors) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result: studentdata.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: studentdata
      });
  });
}

module.exports.findbyid_student = function (req, res) {
	service.findbyid_student (student_data , function(student_id) {
		if (errors) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result:student_id.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: student_id
      });
  });
}
  
  module.exports.update_student = function (req,res){
	  service.update_student(updatestudent,function(updated_student) {
		  if (errors) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result: updated_student.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: updated_student
      });
  });
}
		  
		