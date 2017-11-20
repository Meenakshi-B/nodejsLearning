var student_model = require("./stu_model");
 module.exports.create_student = function (create_student, callback) {
    console.log("before  student dao", create_student);
     var studentdata = new student_model(create_student);
     console.log("student dao", studentdata);
     studentdata.save(function (err) {
         if (err) {
             callback(err);
         } else {console.log("no err");}
          console.log("created student db",studentdata)
         
         callback(studentdata);
		 
	 })
 }
module.exports.findbyid_student = function (student_id, callback) {
    student_model.findById(student_id, function (err, studentdata) {
         if (err) {
             callback(err);
         } 
         else {
         callback(studentdata); }
         console.log("got in dao");
     }) 
 }
module.exports.delete_student = function (delete_student, callback) {
    student_model.findByIdAndRemove(delete_student, function (err) {
         if (err) {
             callback(err);
         }
         callback({ message: "removed" });
     });
 }
 
 module.exports.update_student = function (update_student, callback) {
     student_model.findOneAndUpdate(({_id : update_student.student_id}),
         {
             $set: update_student
         }, { upsert: true, new: true }, function(err, update_student) {
             if (err) {
                 callback(err);
             }
             callback(update_student);
         });
 }; 

 module.exports.getall_students = function (callback) {
  student_model.find().populate('student_id').exec(function (err, all_students) {
    if (all_students.err) {
      callback(err);
    }
    else {
      callback(all_students);

    }
  });
};