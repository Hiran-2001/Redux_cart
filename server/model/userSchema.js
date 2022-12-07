const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    place:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        required:true,
    }
})

module.exports = mongoose.model("userData", userSchema)