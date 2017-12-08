var guest_dao = require('../DAO/guest_DAO');
module.exports.create_guest = function (create_guest,callback){
    guest_dao.create_guest(create_guest,function(guestdata){
        callback(guestdata);
    })

} 

module.exports.update_guest = function (update_guest, callback) {

    guest_dao.update_guest(update_guest, function (update_guest) {
        callback(update_guest);
    })
}
module.exports.delete_guest = function (delete_guest, callback) {

    guest_dao.delete_guest(delete_guest, function (delete_guest) {
        callback(delete_guest);
    })
}
module.exports.findbyid_guest = function (guest_id, callback) {

    guest_dao.findbyid_guest(guest_id, function (guestdata) {
        callback(guestdata);
        console.log("got service");
    }) 
} 


module.exports.getall_guests = function (callback) {
    guest_dao.getall_guests(function (all_guests) {
        callback(all_guests);
    })
}
