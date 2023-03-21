const User = require("./../models/userModel");
const path = require("path");
const {
  cloudinaryUploadImg,
  cloudinaryRemoveImg,
} = require("../helpers/CloudinaryUtil");
const fs = require("fs");

/* ----------------------------------------------------
@desc       Profile photo upload
@route      /profiePic
@method     POST
@access     protected (only logged in users)
---------------------------------------------------- */
exports.profilePicUploadCtrl = async (req, res) => {
  // 1- Validation to ensure file is provided in request
  if (!req.file) {
    return res.status(400).json({ message: "No File provided" });
  }

  // 2- Get image Path
  const imagePath = await path.join(
    __dirname,
    `../images/${req.file.filename}`
  );

  // 3- Upload to cloudinary
  const result = await cloudinaryUploadImg(imagePath);
  // console.log(result);

  //  4- Get user from DB
  const user = await User.findById(req.user.id);
console.log(user.userName);
  // 5- delete old profile photo from cloudinary
  if (user.profilePhoto.publicId !== null) {
    await cloudinaryRemoveImg(user.profilePhoto.publicId);
  }

  // 6- change profile photo in DB
  user.profilePicture = {
    url: result.secure_url,
    publicId: result.public_id
  };
  
  await user.save();

  // 7- send response to client
  res.status(200).json({
    message: "Photo uploaded successfully",
    profilePicture: { url: result.secure_url, publicId: result.public_id },
  });

  // 8- remove image from server
  fs.unlink(imagePath);
};
