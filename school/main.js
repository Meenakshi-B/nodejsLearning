var express = require("express");
var app = express();
var http = require("http");
var path = require("path");
var port = process.env.PORT || 3000;//look
var mongoose = require("mongoose");
var clientPath = path.resolve(__dirname, "client");
var logger = require("morgan");//look
var bodyParser = require("body-parser");
var uniqid = require('uniqid');
var router = require('./routers/emp_router');
app.use(bodyParser.json());
app.options("*", function (req, res, next) {//look
  res.header("Access-Control-Allow-Origin", req.get("Origin") || "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200).end();
});
app.use(logger('dev'));// look
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err)
      req.user = undefined;
      req.user = decode;
      next();
    });
  } else  {
    req.user = undefined;
    next();
  }
});
app.use("/api",router);
app.all("*", function(req, res) {
  res.status(200); 
});

mongoose.connect("mongodb://210.18.139.81:27017/meenaLearning");
// mongoose.connect("mongodb://localhost:27017/DanceSchool");
mongoose.connection.once("connected", function() {
  console.log("Connected to database");
});

app.listen(port);
console.log("Express server listening on port " + port);
