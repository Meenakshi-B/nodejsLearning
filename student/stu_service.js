var student_dao = require('./stu_DAO');
var async = require('async');
module.exports.create_student = function (create_student, callback) {
    console.log("student service", create_student);
    student_dao.create_student(create_student, function (studentdata) {

        callback(studentdata);
    }) 
}

module.exports.update_student = function (update_student, callback) {
    console.log("update service", update_student);
    student_dao.update_student(update_student, function (update_student) {
        callback(update_student);
    })
}
module.exports.delete_student = function (delete_student, callback) {
    console.log("delete service", delete_student);
    student_dao.delete_student(delete_student, function (delete_student) {
        callback(delete_student);
    })
}
module.exports.findbyid_student = function (student_id, callback) {
    console.log("find by id" , student_id);
    student_dao.findbyid_student(student_id, function (studentdata) {
        callback(studentdata);
        console.log("got service");
    }) 
} 


module.exports.getall_students = function (callback) {
    console.log("findall service");
    student_dao.getall_students(function (all_students) {
        callback(all_students);
    })
}
