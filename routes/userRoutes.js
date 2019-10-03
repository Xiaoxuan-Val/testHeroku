/**
 * User router
 * Routes based on user routes created for INFO30005 - Peer Reviewed
 * INCOMPLETE
 * Created for IT PROJECT 2019
 * Group : Odin's Army
 * Initial commit/file creation by Tehara Moonemalle - ID: 879459, Aug 23, 2019
 **/

const router = require("express").Router();
const UserController = require("../controllers/userController.js")


/********************* Routes *********************/
router.get("/id", UserController.findUsername);
router.delete("/", UserController.deleteUser);
router.post("/add", UserController.createNewUser);
router.post("/email", UserController.findUserByEmail);
router.get("/users", UserController.findAllUsers);

/********************* Export *********************/
module.exports = router;
