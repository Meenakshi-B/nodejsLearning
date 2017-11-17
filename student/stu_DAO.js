var student_model = require("./stu_model");
 module.exports.create_student = function (create, callback) {
    console.log("before  student dao", create);
     var studentdata = new student_model(create);
     console.log("student dao", studentdata);
     studentdata.save(function (err) {
         if (err) {
             callback(err);
         }
          console.log("created student db",studentdata)
         callback(studentdata);
		 
	 })
 }
module.exports.findbyid_student = function (student_id, callback) {
    student_model.findById(student_id, function (err, student_data) {
         if (err) {
             callback(err);
         }
         callback(student_data);
     })
 }
module.exports.delete_student = function (delete_student, callback) {
    student_model.findByIdAndRemove(delete_student, function (err) {
         if (err) {
             callback(err);
         }
         callback({ message: "removed" });
     })
 }
 
 module.exports.update_student = function (update_student, callback) {
     student_model.findOneAndUpdate({ _id: update_student_id },
         {
             $set: update_student
         }, { upsert: true, new: true }, function (err, updated_student) {
             if (err) {
                 callback(err);
             }
             callback(updated_student);
         });
 };