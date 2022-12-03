import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <>
    <div className="form-container">

    <div className='form'>
     <Form>
     <h2>Signup</h2>
      <Form.Group className="mb-3" >
        
        <Form.Control className='formControl' type="text" placeholder="Full Name" />
       
      </Form.Group>
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
       <h6>Already have an account ? <Link className='to-login' to={'/login'}>Login</Link></h6>
       </div>
      
    </Form>
    </div>
    </div>
    </>
  )
}

export default Register