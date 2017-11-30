var express = require("express");
var http = require("http");
var path = require("path");
var models = require("./models/Guest_Model");
var router = require("./routers/Guest_router");
var logger = require("morgan");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Content-Length, Authorization, X-Requested-With, X-XSRF-TOKEN");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if ( req.method === 'OPTIONS' ) {
    console.log('OPTIONS SUCCESS');
    res.end();
  }
  next();
});
app.use("/api", router);



    var server = app.listen(3000, function() {
    console.log('Express server listening on port ' + server.address().port);
    });