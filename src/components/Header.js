import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import mtcart from "../assets/cart-empty.png";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { DLT } from "../Redux/actions/action";
import { useEffect } from "react";
import { Avatar } from "@mui/material";
import Button from '@mui/material/Button';
function Header() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getData = useSelector((state) => state.cartReducer.carts);
  const [price, setPrice] = useState(0)
  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DLT(id));
  };



  const total = () => {
    let price = 0;
    getData.map((e) => {
      return price = e.price * e.qnty + price;
    })
    setPrice(price)
  }

  useEffect(() => {
    total()
  }, [total]);
  return (
    <div>
      <Navbar className=""  style={{ height: "80px" , backgroundColor:"white"  }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-dark mx-3">
            Foodie
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-dark">
              Home
            </NavLink>
          </Nav>
          
          <NavLink style={{textDecoration:"none", fontWeight:"bold"}} to={`/login`}> <Button style={{marginRight:15 , color:"black"}} variant="text">Log in</Button></NavLink>
          <NavLink style={{textDecoration:"none"}}  to={`/signin`}><Button style={{marginRight:35 , color:"black"}} variant="text">Sign in</Button></NavLink>
          


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
              className="fa-solid fa-cart-shopping text-dark"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
          <NavLink to={'/profile'}>
          <Avatar
            // src="/static/images/avatar/1.jpg"
            sx={{ width: 35, height: 35 }}
            style={{marginLeft:65}}
          />
          </NavLink>
          
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
          {getData.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <th>Photo</th>
                  <th>Restarant Name</th>
                </thead>
                <tbody>
                  {getData.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : ₹ {e.price}</p>
                            <p>Quantity : {e.qnty}</p>
                            <p onClick={() => dlt(e.id)}>
                              <i
                                style={{
                                  color: "red",
                                  fontSize: "25px",
                                  cursor: "pointer",
                                }}
                                className="fas fa-trash smalltrash"
                              ></i>
                            </p>
                          </td>
                          <td onClick={() => dlt(e.id)}>
                            <i
                              style={{
                                color: "red",
                                fontSize: "25px",
                                cursor: "pointer",
                              }}
                              className="fas fa-trash largetrash "
                            ></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className=" text-center pt-3">Total : ₹ {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
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
          )}
        </Menu>
      </Navbar>
    </div>
  );
}

export default Header;
