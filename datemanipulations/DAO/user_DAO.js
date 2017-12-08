var user_model = require("../models/user_model");
module.exports.create_user = function (create_user, callback) {
    var userdata = new user_model(create_user);
    console.log("user dao", userdata);
    userdata.save(function (err) {
        if (err) {
            callback(err);
        } else {console.log("<<<no err>>>>");}
         console.log("------>created db")
        
        callback(userdata);
        
    })
}
module.exports.findbyid_user = function (user_id, callback) {
   user_model.findById(user_id, function (err, userdata) {
        if (err) {
            callback(err);
        } 
        else {
        callback(userdata); }
        console.log("got in dao");
    }) 
}

module.exports.delete_user = function (delete_user, callback) {
   user_model.findByIdAndRemove(delete_user, function (err) {
        if (err) {
            callback(err);
        }
        callback({ message: "removed" });
    });
}

module.exports.update_user = function (update_user, callback) {
    user_model.findOneAndUpdate(({_id : update_user._id}),
        {
            $set: update_user
        }, { upsert: true, new: true }, function(err, update_user) {
            if (err) {
                callback(err);
            }
            callback(update_user);
        });
}; 

module.exports.getall_users = function (callback) {
 user_model.find().populate('user_id').exec(function (err, all_users) {
   if (all_users.err) {
     callback(err);
   }
   else {
     callback(all_users);

   }
 });
};