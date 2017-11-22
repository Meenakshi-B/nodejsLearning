var express = require("express");
var router = express.Router();
var emp_controller = require("../control/emp_controller");
router.post('/create_emp',emp_controller.create_emp);
router.put('/update_emp/',emp_controller.update_emp);
router.get("/getall_emps",emp_controller.getall_emps);
router.delete("/delete_emp/:id",emp_controller.delete_emp);
router.get("/findbyid_emp/:id",emp_controller.findbyid_emp);
module.exports = router;
