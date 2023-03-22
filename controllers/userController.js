const User = require("./../models/userModel");

/* ----------------------------------------------------
@desc       Get all users
@route      /user/
@method     Get
@access     protected (only Admin)
---------------------------------------------------- */

exports.getUsers = async (req, res) => {

    const allUsers = await User.find().select("-password").select("-__v");
    res.status(200).json({
      status: "Success",
      data: allUsers,
    });
};

/* ----------------------------------------------------
@desc       Get user by id
@route      /user/:id
@method     Get
@access     protected (only userHimself or Admin)
---------------------------------------------------- */
exports.getUserById = async (req, res) => {
  const Data = await User.findById(req.params.id)
    .select("-password")
    .select("-__v");
  if (!Data) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(Data);
};

/* ----------------------------------------------------
@desc       Update user by id
@route      /user/:id
@method     PATCH
@access     protected (only userHimself or Admin)
---------------------------------------------------- */
exports.updateUserById = async (req, res) => {
  const updateUser = await User.findByIdAndUpdate(req.params.id, req.body)
    .select("-password")
    .select("-__v");
  if (!updateUser) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({
    status: "Success",
    message: "Data updated successfully",
    data: updateUser,
  });
};

/* ----------------------------------------------------
@desc       Delete user by id
@route      /user/:id
@method     DELETE
@access     protected (only userHimself or Admin)
---------------------------------------------------- */
exports.deleteUserById = async (req, res) => {
  const deleteUser = await User.findByIdAndDelete(req.params.id);
  if (!updateUser) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({
    status: "Success",
    message: "Data deleted successfully",
  });
};
