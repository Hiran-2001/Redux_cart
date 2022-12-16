const userModel = require("../model/userSchema")
const bcrypt = require("bcryptjs")



// register a user 


exports.createUser = async(req,res)=>{

    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword ) {
      res.status(422).send("plz fill all fields");
      console.log("plzz fill all fileds");
    }else{
  
      try {
        const anyUser = await userModel.findOne({ email: email });
        // console.log(anyUser);
    
        if (anyUser) {
          res.status(422).send("email is already taken");
          console.log("email already taken");
        } else {
          const addUser = new userModel({
            name,
            email,
            password,
            confirmPassword,
           
          });

          // here we will hash our password


          await addUser.save();
          res.status(201).send("user created ");
        //   console.log(addUser);
        }
      }catch(err){
        res.status(422)
      }
  
    }
    
}


// get all user data 


exports.getAllUser = async(req,res)=>{
    const user = await userModel.find();
    res.status(201).json({
        success:true,
        user
    })
}

// get single user data 



exports.getSingleUser = async(req,res)=>{
    const {id} = req.params

    const singleuser = await userModel.findById({_id:id})
  
     res.status(201).json({
     success:true,
     singleuser
     })
}


// user login api 

exports.loginUser = async(req,res)=>{
  // console.log(req.body);
  const {email,password} = req.body;

  if(!email || !password){
      res.send("please fill all fields")
      console.log("please fill all fields")
  }


  try {
     
    const userValid = await userModel.findOne({email:email})
    if (userValid) {
      
         const isMatch = await bcrypt.compare(password,userValid.password)

         if (!isMatch) {
          res.send("Password is incorrect")
          console.log("Password is incorrect")
         }else{
          
          const token = await userValid.generateAuthToken();
          console.log(token);
         }
    }else{
      res.send("email not found")  
      console.log("email not found")  
    }

  } catch (err) {
    console.log(err);
  }

}