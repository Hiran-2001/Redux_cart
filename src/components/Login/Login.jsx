import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "./Login.css"
import {FaEye , FaEyeSlash} from "react-icons/fa"
function Login() {

  const [showPass, setShowPass] = useState(false)
  return (
    <>
    <div className="form-container">

    <div className='login-form'>
     <Form>
     <h2>Login</h2>
      
      <Form.Group id ="formGroup" className="mb-3" >
        
        <Form.Control  className='formControl' type="email" placeholder="Email" />
       
      </Form.Group>

     

      <Form.Group style={{display:"flex"}} className="mb-3" >
  
        <Form.Control  className='formControl' type={!showPass ? "password" : "text"} placeholder="Password" />
          <Button id='showPass' onClick={()=>{setShowPass(!showPass)}} variant="light" style={{width:45 , height:38, marginTop:20, marginLeft:-30,color:"white"  }}>
           { !showPass ? <FaEyeSlash/> : <FaEye/> }
           
          </Button>
         
     
      </Form.Group>
      
      
      <Button className='form-btn' type="submit">
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