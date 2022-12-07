const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
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
    },phoneNumber:{
        type:Number,
    }
})


// password hashing

userSchema.pre("save",async function(next){
  this.password = await bcrypt.hash(this.password,12)
  this.confirmPassword = await bcrypt.hash(this.confirmPassword,12)
  next()
})

module.exports = mongoose.model("userData", userSchema)