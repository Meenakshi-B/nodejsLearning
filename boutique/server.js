var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var config = require('./config');
var User = require('./models/designer_model');

var port = process.env.PORT || 3000;
mongoose.connect(config.database);
app.set('superSecret',config.secret);
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.get('/',function(req,res){
    res.send('hello')
});
app.listen(port);
console.log('server listening to port'+ port)
