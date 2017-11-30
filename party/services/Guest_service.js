var Guest_dao = require('../DAO/Guest_DAO');
module.exports.create_Guest = function (create_Guest,callback){
    Guest_dao.create_Guest(create_Guest,function(Guestdata){
        callback(Guestdata);
    })

} 

module.exports.update_Guest = function (update_Guest, callback) {

    Guest_dao.update_Guest(update_Guest, function (update_Guest) {
        callback(update_Guest);
    })
}
module.exports.delete_Guest = function (delete_Guest, callback) {

    Guest_dao.delete_Guest(delete_Guest, function (delete_Guest) {
        callback(delete_Guest);
    })
}
module.exports.findbyid_Guest = function (Guest_id, callback) {

    Guest_dao.findbyid_Guest(Guest_id, function (Guestdata) {
        callback(Guestdata)
        console.log("got service");
    }) 
} 


module.exports.getall_Guests = function (callback) {
    Guest_dao.getall_Guests(function (all_Guests) {
        callback(all_Guests);
    })
}
