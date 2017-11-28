var express =require("express");
var router = express.Router();
var Order_controller= require("../control/Order_controller");
router.post('/create_Order',Order_controller.create_Order);
router.put('/update_Order/',Order_controller.update_Order);
router.get("/getall_Orders",Order_controller.getall_Orders);
router.delete("/delete_Order/:id",Order_controller.delete_Order);
router.get("/findbyid_Order/:id",Order_controller.findbyid_Order);
module.exports = router;
