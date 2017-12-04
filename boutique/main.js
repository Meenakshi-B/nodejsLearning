var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var jwt = require('jwt-simple');
var auth = require('./auth/auth.js')();
var models = require("./models/designer_model");
var confJWT = require('./config.json').jwt;
var mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/node";
var port = process.env.PORT || 3000;
var logger = require("morgan");
var router = require('./routers/customer_router');
app.use(bodyParser.json());
app.use(auth.initialize());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(logger('dev'));
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
  
  app.post('/auth/login', function(req, res) {
    console.log("---------------------",req.body.username)
    console.log("-----------pass----------",req.body.password)
    if (req.body.username && req.body.password) {
      var username = req.body.username;
      var password = req.body.password;
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
      db.collection("design").findOne({ where: {username: username, password: password} }).then(function(data) {
        console.log(data);
        var user = data;
        if(user) {
        var payload = {
        id : _id
        };
        var token = jwt.encode(payload, confJWT.jwtSecret);
        res.json({
        token: token,
        user: user.toJSON()
        });
        } else {
        res.sendStatus(401);
        }
        });
      }) 
      } else {
      res.sendStatus(401);
    }
  });
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api",auth.authenticate(), router);
app.all('*', function (req, res) { 
});

mongoose.connect("mongodb://localhost:27017/node");
mongoose.connection.once("connected", function() {
  console.log("Connected to database");
});

app.listen(port);
console.log("Express server listening on port " + port);
