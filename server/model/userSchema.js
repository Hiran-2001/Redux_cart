const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
// const keysecret = process.env.JWT_SECRET_KEY
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
    }
    ,phoneNumber:{
        type:Number,
    },
    Tokens:[{
        token:{
            type:String,
            required:true
        }
        
    }]

})


// password hashing

userSchema.pre("save",async function(next){
  this.password = await bcrypt.hash(this.password,12)
  this.confirmPassword = await bcrypt.hash(this.confirmPassword,12)
  next()
})


// jwt token generation

userSchema.methods.generateAuthToken =  async function () {
    try {
        let token = jwt.sign({_id: this._id}, process.env.JWT_SECRET_KEY,{
            expiresIn:"1h"
        })
        this.Tokens = this.Tokens.concat({token: token});
       await this.save()
       return token
    } catch (error) {
        console.log(err);
    }
  }

module.exports = mongoose.model("userData", userSchema)