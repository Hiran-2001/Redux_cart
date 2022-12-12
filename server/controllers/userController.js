const userModel = require("../model/userSchema")



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
  const {email,password} = req.body;
  console.log(req.body);

}