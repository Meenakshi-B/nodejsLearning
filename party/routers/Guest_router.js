var express = require("express");
var router = express.Router();
var Guest_Controller = require("../control/Guest_controller");
const passportConfig = require('../config/passport');
var authorize = require("../control/Guest_controller");



//router.post('/login', Guest_Controller.postLogin);
router.post('/Create_Guest', Guest_Controller.create_Guest);
router.get('/logout', Guest_Controller.logout);
router.post('/signup', Guest_Controller.postSignup);
router.get("/findById/:id", authorize.loginRequired, Guest_Controller.findbyid_Guest);
//router.get("/getall_Guest", authorize.loginRequired, Guest_Controller.getall_Guest);
router.post("/update_Guest", authorize.loginRequired, Guest_Controller.update_Guest);
router.delete("/delete_Guest/:id", authorize.loginRequired, Guest_Controller.delete_Guest);

module.exports = router;
