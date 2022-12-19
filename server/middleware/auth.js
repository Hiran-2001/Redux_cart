const jwt = require("jsonwebtoken")
const userModel = require("../model/userSchema")
const keysecret = process.env.JWT_SECRET_KEY


const authenticate = async (req,res,next)=>{

}
module.exports = authenticate;