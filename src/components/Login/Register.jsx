import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {FaEye , FaEyeSlash} from "react-icons/fa"

function Register() {
  const [showPass, setShowPass] = useState(false)

  return (
    <>
    <div className="form-container">

    <div className='form'>
     <Form>
     <h2>Signup</h2>
      <Form.Group className="mb-3" >
        
        <Form.Control className='formControl' type="text" placeholder="Full Name" />
       
      </Form.Group>
      <Form.Group className="mt-5" >
        
        <Form.Control  className='formControl' type="email" placeholder="Email" />
       
      </Form.Group>

      <div className="password">
        <Form.Control  className='formControl' type="password" placeholder="Password" />
         <Button id='showPass'  onClick={()=>{setShowPass(!showPass)}}  style={{width:45 , height:38, marginTop:20, marginLeft:-30 , color:'white'}}>
         { !showPass ? <FaEyeSlash/> : <FaEye/> }         </Button>
         
      </div>
      
      <Button className='form-btn mt-3' type="submit">
        Create Account
      </Button>
       
       <div className="sign-to-login">
       <h6>Already have an account ? <Link className='to-login' to={'/login'}>Login</Link></h6>
       </div>
      
    </Form>
    </div>
    </div>
    </>
  )
}

export default Register