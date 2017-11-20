var express = require("express");
var router = express.Router();
var stu_controller = require("./stu_controller");
router.post('/create_student',stu_controller.create_student);
router.put('/update_student/',stu_controller.update_student);
router.get("/getall_students",stu_controller.getall_students);
router.delete("/delete_student/:id",stu_controller.delete_student);
router.get("/findbyid_student/:id",stu_controller.findbyid_student);
module.exports = router;
