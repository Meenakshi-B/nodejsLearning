var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.PORT || 3000;
//  var logger = require("morgan");
var router = require('./routers/transaction_router');
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api",router);

mongoose.connect("mongodb://192.168.1.4/meena");
// mongoose.connect("mongodb://localhost:27017/DanceSchool");
mongoose.connection.once("connected", function() {
  console.log("Connected to database");
});

app.listen(port);
console.log("Express server listening on port " + port);
