const mongoose = require("mongoose")

const foodSchema = mongoose.Schema({
    foodName:{
        type:String,
        required:true,
    },
    restaurantName:{
        type:String,
        required:true,
    },
    foodDescription:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
       default:0
    },
    foodImg:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
        
    }
})

module.exports = mongoose.model("foods", foodSchema)