import React from 'react'
import "./updateProfile.css"
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function UpdateProfile() {
    
  const [inputVal , setInputVal] = useState({
    name:"",
    phoneNumber:"",
    email:"",
    address:""
  })
  console.log(inputVal);

  const setValue = (e) => {
    //  console.log(e.target.value);
    const { name, value } = e.target;
    setInputVal(() => {
      return {
        ...inputVal,
        [name]: value,
      };
    });
  };
  
  const {id} = useParams()
  console.log(id);

   const onUpdate= async(e)=>{
   e.preventDefault()

   const {name,phoneNumber , email, address} = inputVal;

   if(!email.includes("@")){
    alert("Please ente valid email id")
   }else if(phoneNumber.length <10){
    alert("Phone number should be 10 digit")
   }else if(name===""){
    alert("please enter your name ")
   }else if(address===""){
    alert("please enter your address")
   }
   else{
       const res = await axios.patch(`/api/v1/update/user/${id}`,{
          name , phoneNumber , email, address
       })
       alert("user update successfully")

       console.log(res);
   }
   }

  return (
    <div id='updateProfile'>
      <div className="form-div">
        <div className="edit-profile">
          <h4>Edit Profile</h4>
        </div>
        <div className="name-phno">
          <Form.Group className="mb-0" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control onChange={setValue} name="name" value={inputVal.name} id='name-phn' type="text" />
            <span className="underline"></span>
          </Form.Group>
          <Form.Group className="mb-0" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control onChange={setValue} name="phoneNumber" value={inputVal.phoneNumbber} id='name-phn' type="text" />
            <span className="underline"></span>
          </Form.Group>
        </div>
        <div className="email-address">
          <Form.Group className="mb-0" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={setValue} name="email" value={inputVal.email} id='email-add' type="email" />
            <span className="underline"></span>
          </Form.Group>
          <Form.Group className="mb-0" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control onChange={setValue} name="address" value={inputVal.address} id='email-add' type="text" />
            <span className="underline"></span>

          </Form.Group>
        </div>
        <div className="btn-div">
        <button type='sumbit' onClick={onUpdate} className="btn btn-2 btn-2i">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfile