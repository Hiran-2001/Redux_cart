const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keysecret = process.env.JWT_SECRET_KEY
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
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]

})


// password hashing

userSchema.pre("save",async function(next){
  this.password = await bcrypt.hash(this.password,12)
  this.confirmPassword = await bcrypt.hash(this.confirmPassword,12)
  next()
})


// jwt token generation

userSchema.methods.generateAuthToken = async function () {
    try {
        let token23 = jwt.sign({ _id: this._id }, keysecret, {
            expiresIn: "1d"
        });

        this.tokens = this.tokens.concat({ token: token23 });
        await this.save();
        return token23;
    } catch (error) {
        // res.status(422).json(error)
        console.log(error);
    }
}

module.exports = mongoose.model("userData", userSchema)