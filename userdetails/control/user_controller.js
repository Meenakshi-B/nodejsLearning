const service = require("../services/user_services");
var MongoClient = require('mongodb').MongoClient;
var mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
var models = require("../models/user_model");
var url = "mongodb://localhost:27017/node";
//var dateFormat = require('dateformat');
var moment = require('moment');
moment().format();


module.exports.delete_user = function (req, res) {

  var user_id = req.params.id;

  service.delete_user(user_id, function (delete_user) {
    var user_id = req.params.id;

    if (delete_user.errors) {
      console.log("error occured", errors)

    } else
      console.log("deleted", delete_user)


  });

}

module.exports.findbyid_user = function (req, res) {
  var user_id = req.params.id;
  service.findbyid_user(user_id, function (userdata) {
    if (user_id.error) {
      console.log("error occured", errors)

    } else
      res.send(userdata)
  });

}
module.exports.dobof_user = function (req, res) {
  var user_id = req.params.id;
  service.findbyid_user(user_id, function (userdata) {
    if (user_id.error) {
      console.log("error occured", errors)

    } else {
      var dat = userdata.dob
      var date = "2017-12-06T09:30:34.277Z"
      var month = moment(dat).format('MMMM')
    
      
      // Use moment(Date) if your input is a JS Date
      //var m = moment(date);
      // m.set({h: 00, m: 00});
      //console.log(date.format());
     /// console.log(date.toDate().toString());
      console.log("dob---->", month)
      res.send(moment(date, ''));
      console.log(moment("2013-02-01", 'dddd').format())
    }
  });
}
module.exports.dates_user = function (req, res) {
  var user_id = req.params.id;
  service.findbyid_user(user_id, function (userdata) {
    if (user_id.error) {
      console.log("error occured", errors)

    } else {
      var date = userdata.dob
      var enumerateDaysBetweenDates = function (startDate, endDate) {
        var dates = [];

        startDate = startDate.add(1, 'days');

        while (startDate.format('M/D/YYYY') !== endDate.format('M/D/YYYY')) {
          console.log(startDate.toDate());
          dates.push(startDate.toDate());
          startDate = startDate.add(1, 'days');
        }

        return dates;
      }

      console.log("dob---->", date)
      res.send(enumerateDaysBetweenDates(moment(new Date('1/1/2014')), moment(new Date('1/5/2014'))));
    }
  });
}
module.exports.datadob_users = function (req, res) {
  service.getall_users(function (all_users) {
    if (all_users.errors) {
      console.log("error occured", errors)
    } else
      var fromDate = "1992-02-01"
    var toDate = "1992-02-28"
    //mongoose.connect("mongodb://localhost:27017/node")
      models.find({ "createdate": {
         "$gte" : new Date("2017-12-06T10:03:23.958+05:30"), 
         "$lte" : new Date("2017-12-06T09:30:34.277Z")
        }}) .then(function(dobdata) {
          console.log("---->",dobdata);
        res.send(dobdata);
      })
  })

  
  };


module.exports.update_user = function (req, res) {
  var testapp = req.body;
  service.update_user(testapp, function (update_user) {
    if (update_user.error) {
      console.log("error occured", errors)


    } else
      res.send(update_user)

  });

}


module.exports.getall_users = function (req, res) {
  service.getall_users(function (all_users) {
    if (all_users.errors) {
      console.log("error occured", errors)
    } else



      res.send(all_users);
  });
}

module.exports.create_user = function (req, res) {
  var testapp = req.body;
  console.log("trans data ----->", testapp)
  service.create_user(testapp, function (userdata) {
    if (userdata.error) {
      console.log("ERRORRRR", error)
    } else res.send(userdata);
  });
}


