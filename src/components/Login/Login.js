import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "./Login.css"
import {FaEye , FaEyeSlash} from "react-icons/fa"
import axios from "axios";

function Login() {

  const [showPass, setShowPass] = useState(false)
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  console.log(inputValue);
  const setValue = (e) => {
    //  console.log(e.target.value);
    const { name, value } = e.target;
    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };

  const loginUser = async (e) => {
    const { email, password } = inputValue;

    e.preventDefault();

    if (email === "") {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("please enter valid email");
    } else if (password === "") {
      alert("please enter your password");
    } else if (password.length < 8) {
      alert("password must be 8 characters");
    }else {
      const res = await axios.post("/api/v1/login",{
        email,
        password,
      })
      alert("user Login successfully");
      if (res.status === 201){
         localStorage.setItem("usertoken",res.data.token)
        setInputValue({
          ...inputValue,
          
          email: "",
          password: "",
         
        });
      }
          console.log(res);
    }
  };
  return (
    <>
    <div className="form-container">

    <div className='login-form'>
     <Form>
     <h2>Login</h2>
      
      <Form.Group id ="formGroup" className="mb-3" >
        
        <Form.Control autoComplete='off' onChange={setValue} value={inputValue.email} name="email" className='formControl' type="email" placeholder="Email" />
       
      </Form.Group>

     

      <Form.Group style={{display:"flex"}} className="mb-3" >
  
        <Form.Control  autoComplete='off' onChange={setValue} value={inputValue.password} name="password"  className='formControl' type={!showPass ? "password" : "text"} placeholder="Password" />
          <Button id='showPass' onClick={()=>{setShowPass(!showPass)}} variant="light" style={{width:45 , height:38, marginTop:20, marginLeft:-30,color:"white"  }}>
           { !showPass ? <FaEyeSlash/> : <FaEye/> }
           
          </Button>
         
     
      </Form.Group>
      
      
      <Button onClick={loginUser} className='form-btn' type="submit">
        Login
      </Button>
       
       <div className="sign-to-login">
       <h6>New to Foodie? <Link className='to-login' to={'/signin'}>Create account</Link></h6>
       </div>
      
    </Form>
    </div>
    </div>
    </>
  )
}

export default Login