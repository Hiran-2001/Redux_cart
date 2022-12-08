import React from "react";
import "./Profile.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import profilePic from "../../assets/istockphoto-587805156-612x612.jpg";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import sampleImg from "../../assets/bg-img.jpg"
function Profile() {
  return (
    <>
      <div id="profile-main">
        <div style={{width: "30rem",  height: "38rem",}} className="profile-pic-div">
          <Card
            id="profileCard"
            style={{
              width: "20rem",
              height: "28rem",
              // marginTop: "3rem",
              display: "flex",
              alignItems: "center",
              border: "none",
            }}
          >
            <Card.Img
              style={{
                borderRadius: "50%",
                height: 250,
                width: 250,
                marginLeft: 15,
              }}
              variant="top"
              src={profilePic}
            />
            <button
              style={{
                border: "none",
                background: "none",
                marginLeft: 150,
                marginTop: -40,
              }}
            >
              <BsFillPlusCircleFill style={{ width: 30, height: 30 }} />{" "}
            </button>
            <Card.Body>
              <Card.Title style={{ textAlign: "center",marginTop:"3rem" }}>
                Hello Hiran Raj
              </Card.Title>
              
            </Card.Body>
          </Card>
          <div  style={{marginTop:"3rem",width:"20rem",height:"3rem"}} id="logout-delete-acc-div">
            <Button style={{backgroundColor:"red" ,width:"6rem", border: "none",}}>Logout</Button>
            <Button style={{backgroundColor:"red" , border: "none",}}>Delete Account</Button>
          </div>

        </div>

        {/* user details div */}

        <div id="user-details" className="">
          <Card
            border="light"
            style={{ width: "35rem", height: "27rem", marginTop: "3rem", borderRadius:"10px" }}
          >
            <Card.Header style={{ backgroundColor: "white", borderRadius:"20px 20px 0px 0px" }}>
              Personal Information
            </Card.Header>
            <Card.Body>


                {/* user name card div  */}



              <div style={{ display: "flex" }} className="user-name">
                <Card.Text style={{ marginTop: "1.5rem" }}>
                  Full Name{" "}
                </Card.Text>
                <Form.Control
                  className="formControl"
                  // onChange={setValue}
                  // value={inputValue.name}
                  name="name"
                  type="text"
                  placeholder="Full Name"
                />
                <button
                  style={{
                    border: "none",
                    background: "none",
                  }}
                >
                  <MdModeEditOutline style={{ width: 20, height: 20 }} />{" "}
                </button>
              </div>


              {/* user email card div  */}


              <div style={{ display: "flex" }} className="user-email">
                <Card.Text style={{ marginTop: "1.5rem" }}>Email</Card.Text>
                <Form.Control
                  style={{ marginLeft: "4rem" }}
                  className="formControl"
                  // onChange={setValue}
                  // value={inputValue.name}
                  name="email"
                  type="text"
                  placeholder="Email"
                />
                <button
                  style={{
                    border: "none",
                    background: "none",
                  }}
                >
                  <MdModeEditOutline style={{ width: 20, height: 20 }} />{" "}
                </button>
              </div>

              {/* user number card div  */}




              <div style={{ display: "flex" }} className="user-number">
                <Card.Text style={{ marginTop: "1.5rem" }}>Phone No</Card.Text>
                <Form.Control
                  style={{ marginLeft: "2rem" }}
                  className="formControl"
                  // onChange={setValue}
                  // value={inputValue.name}
                  name="number"
                  type="text"
                  placeholder="Phone Number"
                />
                <button
                  style={{
                    border: "none",
                    background: "none",
                  }}
                >
                  <MdModeEditOutline style={{ width: 20, height: 20 }} />{" "}
                </button>
              </div>

             {/* address  */}

              <div style={{ display: "flex" }} className="user-number">
                <Card.Text style={{ marginTop: "1.5rem" }}>Address</Card.Text>
                <Form.Control
                  style={{ marginLeft: "3rem" }}
                  className="formControl"
                  // onChange={setValue}
                  // value={inputValue.name}
                  name="number"
                  type="text"
                  placeholder="Address"
                />
                <button
                  style={{
                    border: "none",
                    background: "none",
                  }}
                >
                  <MdModeEditOutline style={{ width: 20, height: 20 }} />{" "}
                </button>
              </div>
              <button
                style={{
                  border: "none",
                  backgroundColor: "whitesmoke",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  marginLeft: "17rem",
                }}
              >
                Change Password 
                <FaLock
                  style={{
                    width: "0.8rem",
                    height: "0.8rem",
                    marginTop: "-0.3rem",
                    marginLeft:".5rem"
                  }}
                />
              </button>
            </Card.Body>
          </Card>

                 {/* my order card  */}
             
          <Card
            border="light"
            style={{ width: "35rem", height: "15rem", marginTop: "3rem" }}
          >
            <Card.Header>My Order</Card.Header>
            <Card.Body>
                <div style={{display:"flex"}} className="orders">

                  <div style={{height:"10rem",width:"10rem" }} className="order-img">
                         <img style={{height:"10rem",width:"10rem" , borderRadius:"10px" }} src={sampleImg} alt="img" />
                  </div>
                  <div style={{marginLeft:"5rem"}} className="order-details">
                     <Card.Text>Dish : Porotta</Card.Text>
                     <Card.Text>Price : 10rs</Card.Text>
                     <Card.Text>Quantity : 2</Card.Text>
                     <Card.Text>Total Price : 20</Card.Text>
                  </div>
                </div>
             
            </Card.Body>
          </Card>

          
        </div>
      </div>
    </>
  );
}

export default Profile;
