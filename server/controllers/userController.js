const userModel = require("../model/userSchema")

exports.createUser = async(req,res)=>{
    const user = await userModel.create(req.body)
        res.status(201).json({
            success:true,
            user
           })
    
}

exports.getAllUser = async(req,res)=>{
    const user = await userModel.find();
    res.status(201).json({
        success:true,
        user
    })
}

exports.getSingleUser = async(req,res)=>{
    const {id} = req.params

    const singleuser = await userModel.findById({_id:id})
  
     res.status(201).json({
     success:true,
     singleuser
     })
}