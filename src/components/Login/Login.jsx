import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "./Login.css"
function Login() {
  return (
    <>
    <div className="form-container">

    <div className='login-form'>
     <Form>
     <h2>Login</h2>
      
      <Form.Group className="mb-3" >
        
        <Form.Control  className='formControl' type="email" placeholder="Email" />
       
      </Form.Group>

      <Form.Group className="mb-3" >
        
        <Form.Control  className='formControl' type="password" placeholder="Password" />
      </Form.Group>
      
      <Button className='form-btn' type="submit">
        Create Account
      </Button>
       
       <div className="sign-to-login">
       <h6>New to Foodie? <Link className='to-login' to={'/signin'}>Login</Link></h6>
       </div>
      
    </Form>
    </div>
    </div>
    </>
  )
}

export default Login