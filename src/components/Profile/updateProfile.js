import React from 'react'
import "./updateProfile.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function updateProfile() {
  return (
    <div id='updateProfile'>
      <div className="form-div">
        <div className="edit-profile">
          <h4>Edit Profile</h4>
        </div>
        <div className="name-phno">
          <Form.Group className="mb-0" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control id='name-phn' type="text" />
            <span class="underline"></span>
          </Form.Group>
          <Form.Group className="mb-0" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control id='name-phn' type="text" />
            <span class="underline"></span>
          </Form.Group>
        </div>
        <div className="email-address">
          <Form.Group className="mb-0" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control id='email-add' type="email" />
            <span class="underline"></span>
          </Form.Group>
          <Form.Group className="mb-0" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control id='email-add' type="text" />
            <span class="underline"></span>

          </Form.Group>
        </div>
        <div className="btn-div">
        <button class="btn btn-2 btn-2i">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default updateProfile