var student_model=require.(././"people_model");
 module.exports.create_student = function (create_student, callback) {
     var peopledata = new student_model(create_people);
     console.log("student dao", studentdata);
     studentdata.save(function (err) {
         if (err) {
             callback(err);
         } else {console.log("no err");}
          console.log(studentdata)
         callback(studentdata);
