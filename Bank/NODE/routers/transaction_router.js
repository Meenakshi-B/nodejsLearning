var express =require("express");
var router = express.Router();
var transaction_controller= require("../control/transaction_controller");
router.post('/create_transaction',transaction_controller.create_transaction);
router.put('/update_transaction/',transaction_controller.update_transaction);
router.get("/getall_transactions",transaction_controller.getall_transactions);
router.delete("/delete_transaction/:id",transaction_controller.delete_transaction);
router.get("/findbyid_transaction/:id",transaction_controller.findbyid_transaction);
module.exports = router;
