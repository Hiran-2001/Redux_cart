const userModel = require("../model/userSchema");
const bcrypt = require("bcryptjs");

// register a user

exports.createUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    res.status(422).send("plz fill all fields");
    console.log("plzz fill all fileds");
  } else {
    try {
      const anyUser = await userModel.findOne({ email: email });
      // console.log(anyUser);

      if (anyUser) {
        res.status(422).send("email is already taken");
        console.log("email already taken");
      } else if (password !== confirmPassword) {
        res.status(422).send("password doesnt match");
        console.log("password doesnt match");
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
    } catch (err) {
      res.status(422);
    }
  }
};

// get all user data

exports.getAllUser = async (req, res) => {
  const user = await userModel.find();
  res.status(201).json({
    success: true,
    user,
  });
};

// get single user data

exports.getSingleUser = async (req, res) => {
  const { id } = req.params;

  const singleuser = await userModel.findById({ _id: id });

  res.status(201).json({
    success: true,
    singleuser,
  });
};

// user login api

exports.loginUser = async (req, res) => {
  let token;
  const { email, password } = req.body;
  if (!email || !password) {
    res.send("Please fill all the fields");
  }

  const userLogin = await userModel.findOne({ email: email });

  if (userLogin) {
    const isMatch = await bcrypt.compare(password, userLogin.password);

    if (!isMatch) {
      res.send("Invalid  password");
    } else {
      // res.send("user successfully logged in");

      // token generation
      token = await userLogin.generateAuthToken();
      console.log(token);

      //  cookie generate

      res.cookie("usercookie", token, {
        expires: new Date(Date.now() + 9000000),
        httpOnly: true,
      });
      const result = { userLogin, token };
      res.status(201).json({status:201,token});
    }
  } else {
    res.send("invalid  email");
  }
};

//update user

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!user) {
    res.send("no user to update");
  }
  res.send(user);
  user.save();
};

//delete user

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findByIdAndDelete(id);
  if (!user) {
    res.send("no user to delete");
  }
  res.send(`user deleted successfully  ${user}`);
};



exports.validateUser = async(req,res)=>{

try {
   const validateUser = await userModel.findOne({_id:req.userId})  
   res.status(201).json({status:201,validateUser})
}  catch (error) {
  res.send("no token provided")
}
}