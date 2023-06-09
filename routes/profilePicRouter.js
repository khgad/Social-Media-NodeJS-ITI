const express = require("express");
const photoUpload = require("./../helpers/photoUpload");
const picCtrl = require("./../controllers/profilePicCtrl");
const router = express.Router();
const {verifyToken} = require("./../controllers/authControler");

// protected routes
router.use("/", verifyToken);

/* single : upload one photo only
image : file name in request must be image */
router.post("/",photoUpload.single("image"),picCtrl.profilePicUploadCtrl);

module.exports = router;