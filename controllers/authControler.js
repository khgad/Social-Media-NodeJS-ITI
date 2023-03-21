const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { signUpSchema } = require("./../helpers/userValidator");

const signToken = (id) => {
  return jwt.sign({ id }, "secret", {
    expiresIn: "90d",
  });
};
/* ----------------------------------------------------
@desc       Add new user
@route      /user/
@method     POST
@access     un-protected
---------------------------------------------------- */
exports.signup = async (req, res) => {
  try {
    // create a new user
    const user = await User.create(req.body);
    const valid = await signUpSchema.validateAsync(req.body);

    res.status(201).json({
      status: "success",
      data: {
        name: user.userName,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  const { userName, password } = req.body;
  // 1- check username or password exists in the request itself
  if (!userName || !password) {
    return res.status(400).json({
      status: "error",
      message: "Check your credentials again",
    });
  }
  // 2 - check username and password are valid inside Database
  const user = await User.findOne({ userName });
  // select (+password) retrieve field from database

  // comparing input password with hashed password inside DB
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({
      status: "error",
      message: "Check your credentials again",
    });
  }
  // 3 - if everything is correct
  // create jwt token
  const token = signToken({ id: user._id });
  res.status(200).json({
    status: "success",
    message: "Logged in successfully",
    token,
  });
};

exports.verifyToken = async (req, res, next) => {
  // 1- get token and check it exists
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization;
  } else {
    return res.status(500).json({
      status: "Error",
      message: "you are not allowed to access this page",
    });
  }
  // 2- validate token
  try {
    const { id } = jwt.verify(token, "secret");
  } catch {
    return res.status(500).json({
      status: "Error",
      message: "invalid Signature",
    });
  }
  next();
};

exports.protectUser = async (req, res, next) => {
  if (req.user.isAdmin || (req.user.id === req.params.id)) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Not allowed,Only Admin or User Himself" });
  }
};
