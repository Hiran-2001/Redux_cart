const foodModel = require("../model/foodSchema")

exports.createFood = async(req,res)=>{
   const food = await foodModel.create(req.body)
   res.status(201).json({
    success:true,
    food
   })
}
exports.getFood = async(req,res)=>{
   const food = await foodModel.find()
   res.status(200).json({
    success:true,
    food
   })
}