var user_dao = require('../DAO/user_DAO');
module.exports.create_user = function (create_user,callback){
    user_dao.create_user(create_user,function(userdata){
        callback(userdata);
    })

} 


module.exports.update_user = function (update_user, callback) {

    user_dao.update_user(update_user, function (update_user) {
        callback(update_user);
    })
}
module.exports.delete_user = function (delete_user, callback) {

    user_dao.delete_user(delete_user, function (delete_user) {
        callback(delete_user);
    })
}
module.exports.findbyid_user = function (user_id, callback) {

    user_dao.findbyid_user(user_id, function (userdata) {
        callback(userdata);
        console.log("got service");
    }) 
} 


module.exports.getall_users = function (callback) {
    user_dao.getall_users(function (all_users) {
        callback(all_users);
    })
}
