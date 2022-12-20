const jwt = require("jsonwebtoken");
const userModel = require("../model/userSchema");
const keysecret = process.env.JWT_SECRET_KEY;

const authenticate = async (req, res, next) => {
  try {
    const userToken = req.headers.authorization;
    const verifyToken = jwt.verify(userToken, process.env.JWT_SECRET_KEY);
    const user = await userModel.findOne({ _id: verifyToken._id });
    if (!user) {
      throw new Error("user not found");
    }
    req.userToken = userToken;
    req.user = user;
    req.userId = user._id;

    next();
  } catch (error) {
       res.send("no token provided")
  }
};
module.exports = authenticate;
