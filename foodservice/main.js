var express = require("express");
var http = require("http");
var sync = require('sync');
var path = require("path");
var models = require("./models/Order_Model");
var router = require("./routers/Order_router");
var logger = require("morgan");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", router);



models.sequelize.sync.then(function () {
    var server = app.listen(3000, function() {
    console.log('Express server listening on port ' + server.address().port);
    });
  });