const express = require("express");
const userController = require("./../controllers/userController");
const authControler= require("./../controllers/authControler");
const router = express.Router();
const CheckObjectId = require("./../helpers/CheckValidObjectId");


// protect all other routes
router.get("/",authControler.verifyToken,authControler.protectUser,userController.getUsers);

/* single : upload one photo only
image : file name in request must be image */

router.use("/:id",CheckObjectId,authControler.verifyToken,authControler.protectUser);

router
  .route("/:id")
  .get(userController.getUserById)
  .patch(userController.updateUserById)
  .delete(userController.deleteUserById);


module.exports = router;
