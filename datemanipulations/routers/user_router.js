var express =require("express");
var router = express.Router();
var user_controller= require("../control/user_controller");
router.post('/create_user',user_controller.create_user);
router.post('/compare_user',user_controller.compare_user);
router.get("/dobof_user/:id",user_controller.dobof_user);
router.get("/dates_user/:id",user_controller.dates_user);
router.get("/datadob_users",user_controller.datadob_users)
router.put('/update_user/',user_controller.update_user);
router.get("/getall_users",user_controller.getall_users);
router.delete("/delete_user/:id",user_controller.delete_user);
router.get("/findbyid_user/:id",user_controller.findbyid_user);
module.exports = router;
