import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import mtcart from "../assets/cart-empty.png";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
function Header() {
  const getData = useSelector((state) => state.cartReducer.carts);
  // console.log(getData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div >
      <Navbar className="" bg="dark" variant="dark" style={{ height: "60px" }}>
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
            badgeContent={getData.length}
            color="warning"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
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
            "aria-labelledby": "basic-button",
          }}
        >

        {
          getData.length ? 

          <div className="card_details" style={{width:"24rem", padding:10}}>
            <Table>
              <thead>
                <th>Photo</th>
                <th>Restarant Name</th>
              </thead>
              <tbody>
              {
                getData.map((e)=>{
                  return(
                    <>
                      <tr>
                        <td>
                        <NavLink to={`/cart/${e.id}`}onClick={handleClose}>

                          <img src={e.imgdata} style={{width:"5rem", height:"5rem"}} alt="" />
                        </NavLink>
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p>Price : ₹ {e.price}</p>
                          <p>Quantity :  {e.qnty}</p>
                          <p>
                            <i style={{color:"red" , fontSize:"25px" ,cursor:"pointer"}} className="fas fa-trash smalltrash"></i>
                          </p>
                        </td>
                        <td>
                          <i style={{color:"red" , fontSize:"25px" ,cursor:"pointer"}} className="fas fa-trash largetrash "></i>
                        </td>
                      </tr>
                    </>
                  )
                })
              }
              <p className=" text-center pt-3">Total : ₹ 350</p>
              </tbody>
            </Table>
          </div>
           :
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <i
              className="fas fa-close"
              style={{
                position: "absolute",
                top: "5px",
                right: "15px",
                fontSize: 23,
                cursor: "pointer",
              }}
              onClick={handleClose}
            ></i>
            <p>Your cart is empty</p>
            <img
              style={{ height: "100px", width: "100px", margin: "0px 25px" }}
              src={mtcart}
              alt=""
            />
          </div>
        }
          
        </Menu>
      </Navbar>
    </div>
  );
}

export default Header;
