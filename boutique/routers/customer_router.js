var express =require("express");
var router = express.Router();
var Customer_controller= require("../control/Customer_controller");
router.post('/create_Customer',Customer_controller.create_Customer);
router.put('/update_Customer/',Customer_controller.update_Customer);
router.get("/getall_Customers",Customer_controller.getall_Customers);
router.delete("/delete_Customer/:id",Customer_controller.delete_Customer);
router.get("/findbyid_Customer/:id",Customer_controller.findbyid_Customer);
module.exports = router;
