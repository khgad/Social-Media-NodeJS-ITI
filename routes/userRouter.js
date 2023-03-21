const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authControler");
const photoUpload = require("./../helpers/photoUpload");
const picCtrl = require("./../controllers/profilePicCtrl");
const router = express.Router();
const CheckObjectId = require("./../helpers/CheckValidObjectId");

// protect all other routes
router.use("/", authController.verifyToken);
router.get("/",userController.getUsers);

/* single : upload one photo only
image : file name in request must be image */
router.post("/profilePic",photoUpload.single("image"),picCtrl.profilePicUploadCtrl);

router.use("/:id",CheckObjectId,authController.protectUser,authController.verifyToken);

router
  .route("/:id")
  .get(userController.getUserById)
  .patch(userController.updateUserById)
  .delete(userController.deleteUserById);

module.exports = router;
