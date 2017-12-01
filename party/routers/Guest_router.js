var express = require("express");
var router = express.Router();
var Guest_Controller = require("../control/Guest_controller");
const passportConfig = require('../config/passport');
var authorize = require("../control/Guest_controller");



//router.post('/login', Guest_Controller.postLogin);
router.post('/Create_Guest', Guest_Controller.create_Guest);
router.get("/findByid/:id", Guest_Controller.findbyid_Guest);
router.get("/getall_Guest", Guest_Controller.getall_Guest);
router.post("/update_Guest", Guest_Controller.update_Guest);
router.delete("/delete_Guest/:id", Guest_Controller.delete_Guest);

module.exports = router;
