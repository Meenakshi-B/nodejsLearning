var guest_model = require("../models/guest_model");
module.exports.create_guest = function (create_guest, callback) {
   console.log("before  guest dao", create_guest);
    var guestdata = new guest_model(create_guest);
    console.log("guest dao", guestdata);
    guestdata.save(function (err) {
        if (err) {
            callback(err);
        } else {console.log("<<<no err>>>>");}
         console.log("------>created db")
        

         callback(guestdata);
        
    })
}
module.exports.findbyid_guest = function (guest_id, callback) {
   guest_model.findById(guest_id, function (err, guestdata) {
        if (err) {
            callback(err);
        } 
        else {
        callback(guestdata); }
        console.log("DAO",guestdata);
        console.log("got in dao");
    }) 
}
module.exports.delete_guest = function (delete_guest, callback) {
   guest_model.findByIdAndRemove(delete_guest, function (err) {
        if (err) {
            callback(err);
        }
        callback({ message: "removed" });
    });
}

module.exports.update_guest = function (update_guest, callback) {
    guest_model.findOneAndUpdate(({_id : update_guest._id}),
        {
            $set: update_guest
        }, { upsert: true, new: true }, function(err, update_guest) {
            if (err) {
                callback(err);
            }
            callback(update_guest);
        });
}; 

module.exports.getall_guests = function (callback) {
 guest_model.find().populate('guest_id').exec(function (err, all_guests) {
   if (all_guests.err) {
     callback(err);
   }
   else {
    callback(all_guests)

   }
 });
};