var express =require("express");
var router = express.Router();
var Customer_controller= require("../control/Customer_controller");
router.post('/create_Customer',Customer_controller.create_customer);
router.put('/update_Customer/',Customer_controller.update_customer);
router.get("/getall_Customers",Customer_controller.getall_customers);
router.delete("/delete_Customer/:id",Customer_controller.delete_customer);
router.get("/findbyid_Customer/:id",Customer_controller.findbyid_customer);
module.exports = router;
