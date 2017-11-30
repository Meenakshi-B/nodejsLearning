var express = require("express");
var router = express.Router();
var userController = require("../Control/Guest_controller");
const passportConfig = require('../passport');
var authorize = require("../Control/user_controller");



router.post('/login', userController.postLogin);
router.get('/logout', userController.logout);
router.post('/signup', userController.postSignup);
router.get("/findById/:id",authorize.loginRequired, userController.findById);
router.get("/getall_user", authorize.loginRequired, userController.getall_user);
router.post("/update_user", authorize.loginRequired, userController.update_user);
router.delete("/delete_user/:id", authorize.loginRequired, userController.delete_user);

