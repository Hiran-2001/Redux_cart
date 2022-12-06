const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("not valid email")
            }
        }
    },
    phoneNumber:{
        type:String,
        // required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false,
        minlength:6
    },
    confirmPassword:{
        type:String,
        required:true,
        minlength:6
    },
    Tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model('/userData' , userSchema)