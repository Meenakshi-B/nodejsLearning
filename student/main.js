var express = require("express");
var app = express();
var http = require("http");
var path = require("path");
var port = process.env.PORT || 3000;
var mongoose = require("mongoose");
var flash = require("connect-flash");
var clientPath = path.resolve(__dirname, "client");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");
var router = require('./stu_router');
var User = require('./stu_model');
jsonwebtoken = require("jsonwebtoken");
var Users = require('./stu_model');

var swaggerJSDoc = require('swagger-jsdoc');


// swagger definition
var swaggerDefinition = {
    info: {
      title: 'Schedule App  API',
      version: '1.0.0',
      description: 'RESTful API with Swagger',
    },
    host: 'localhost:3000',
    basePath: '/',
  };

    // options for the swagger docs
  var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./Swagger/*.js'],
  };



  // initialize swagger-jsdoc
  var swaggerSpec = swaggerJSDoc(options);

  // serve swagger
app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });



app.use(bodyParser.json());


app.options("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.get("Origin") || "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200).end();
});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err)
      req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
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
