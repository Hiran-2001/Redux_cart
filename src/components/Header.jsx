import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import mtcart from '../assets/cart-empty.png'
 import {useSelector} from "react-redux"
function Header() {

  const getData = useSelector((state)=>state.cartReducer)
  console.log(getData);
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Foodie
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={4}
            color="warning"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <div className="card_details d-flex justify-content-center align-items-center" style={{width:"24rem" , padding:10, position: "relative"}}>
         <i className="fas fa-close" style={{position:"absolute", top:"5px", right:"15px" , fontSize:23,cursor:"pointer"}}
         onClick={handleClose}></i>
        <p >Your cart is empty</p>
        <img style={{height:"100px" , width:"100px",margin: "0px 25px"}} src={mtcart} alt="" />
       </div>
      </Menu>
      </Navbar>
    </div>
  );
}

export default Header;
