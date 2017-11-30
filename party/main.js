var express = require("express");
var http = require("http");
var path = require("path");
var models = require("./models");
var passport = require('passport')
var session = require('express-session')
var router = require("./routers/Guest_router");
var confJWT = require('./config/config.json').jwt;
var auth = require('./auth/auth.js')();
var jwt = require('jwt-simple');
var logger = require("morgan");
//var env = require('dotenv').load()
var bodyParser = require('body-parser');
var app = express();
var clientPath = path.resolve(__dirname, "client");
app.use(bodyParser.json());
app.use(auth.initialize());
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
app.post('/auth/login', function(req, res) {
	if (req.body.username && req.body.password) {
		var username = req.body.username;
		var password = req.body.password;
			models.Users.findOne({ where: {username: username, password: password} }).then(function(data) {
			console.log(data);
			var user = data;
			if(user) {
			var payload = {
			id: user.id
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
		} else {
		res.sendStatus(401);
	}
});
	app.get('/user', auth.authenticate(), function(req, res) {
		models.Users.findOne({ where: {id: req.user.id} }).then(function(data) {
		console.log(data);
		var user = data;
		if(user) {
		res.json(user);
	}
	});
});


app.use("/",express.static(clientPath));
app.use("/api", router);
app.all('*', function (req, res) { 
});



models.sequelize.sync().then(function () {
    var server = app.listen(3000, function() {
    console.log('Express server listening on port ' + server.address().port);
    });
});