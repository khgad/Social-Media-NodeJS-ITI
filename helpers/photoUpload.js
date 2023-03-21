const path = require("path");
const multer = require("multer");
const { response } = require("../app");

// photo storage
const photoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../images"));
  },
  filename: function (req, file, cb) {
    if (file) {
      // save file with original name
      cb(null, file.originalname);
    } else {
      // dont give name to file
      cb(null, false);
    }
  },
});

// photo upload middleware

  const photoUpload = multer({
    storage: photoStorage,
    fileFilter: function (req, file, cb) {
      if (file.mimetype.startsWith("image")) {
        cb(null, true);
      } else {
        // error msg and false means dont upload
        cb({ message: "Unsupported image type" }, false);
      }
    },
    limits: { fileSize: 1024 * 1024 * 3} // max img size 3 megabyte
  });


module.exports=photoUpload;
