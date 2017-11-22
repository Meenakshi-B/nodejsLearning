var emp_dao = require('../DAO/emp_DAO');
var async = require('async');
module.exports.create_emp = function (create_emp, callback) {
    console.log("emp service", create_emp);
    emp_dao.create_emp(create_emp, function (empdata) {

        callback(empdata);
    }) 
}
module.exports.update_emp = function (update_emp, callback) {
    console.log("update service", update_emp);
    emp_dao.update_emp(update_emp, function (update_emp) {
        callback(update_emp);
    })
}
module.exports.delete_emp = function (delete_emp, callback) {
    console.log("delete service", delete_emp);
    emp_dao.delete_emp(delete_emp, function (delete_emp) {
        callback(delete_emp);
    })
}
module.exports.findbyid_emp = function (emp_id, callback) {
    console.log("find by id" , emp_id);
    emp_dao.findbyid_emp(emp_id, function (empdata) {
        callback(empdata);
        console.log("got service");
    }) 
} 


module.exports.getall_emps = function (callback) {
    console.log("findall service");
    emp_dao.getall_emps(function (all_emps) {
        callback(all_emps);
    })
}
