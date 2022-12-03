const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        required:true,
    },
})