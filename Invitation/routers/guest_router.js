var express =require("express");
var router = express.Router();
var guest_controller = require("../control/guest_controller");
router.post('/create_guest',guest_controller.create_guest);
router.put('/update_guest/',guest_controller.update_guest);
router.get("/getall_guests",guest_controller.getall_guests);
router.get("/sendinvite_guest/:id",guest_controller.sendinvite_guest);
router.delete("/delete_guest/:id",guest_controller.delete_guest);
router.get("/findbyid_guest/:id",guest_controller.findbyid_guest);
module.exports = router;
