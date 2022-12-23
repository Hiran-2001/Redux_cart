import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import errImg from  "../assets/404.png"
function Error() {
  const navigate = useNavigate()
  const goHome=()=>{
    navigate('/')
  }
  return (
    <div style={{textAlign:"center", backgroundColor:'black' , height:"88vh"}}>
      <div  className="error">
        <img id='errImg' style={{height:"15rem" , width:"40rem"}} src={errImg} alt="" srcset="" />
      </div>
      <div  className="goback">
        <h2>Please login to view profile</h2>
        <Button id='backButton' style={{marginTop:15 }} onClick={goHome}>Go Home</Button>
      </div>
    </div>
  )
}

export default Error