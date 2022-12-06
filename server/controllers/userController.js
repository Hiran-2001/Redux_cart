const userModel = require("../model/userSchema")
exports.createUser = async(req,res)=>{
    const user = await userModel.create(req.body)
    res.status(200).json({
        success:true,
        user
    })
}