//const User = require('./stu_model');
const service = require("./stu_Service")
var wrapper = require('./wrapper')
module.exports.delete_student = function (req, res) {

  var student_id = req.params.id;

  service.delete_student(student_id, function (delete_student) {
        var student_id = req.params.id;

    if (delete_student.errors) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result: delete_student.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: delete_student
      });
  });
}

module.exports.create_student = function (req, res) {
  var testapp=req.body;
	console.log("data--------------->",testapp)
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
  }); console.log(" cntrl to service");
} 

module.exports.findbyid_student = function (req, res) {
  var student_id = req.params.id;
	service.findbyid_student (student_id , function(studentdata) {
		if (student_id.error) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result:student_id.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: studentdata
      });
  });
}
  
  module.exports.update_student = function (req,res){
    var testapp=req.body;
	  service.update_student(testapp,function(update_student) {
		  if (update_student.error) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result: update_student.message
      });
    } else
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: update_student
      });
  });
}
		

module.exports.getall_students = function (req, res) {
  service.getall_students(function(all_students) {
    if (all_students.errors) {
      res.status(400).send({
        status: wrapper.FailureStatus,
        code: wrapper.FailureCode,
        result:all_students.message
      });
    } else{
      res.status(200).send({
        status: wrapper.SuccessStatus,
        code: wrapper.SuccessCode,
        result: all_students
      });
    }
  });
}	