import React from "react";
import "./Profile.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import profilePic from "../../assets/istockphoto-587805156-612x612.jpg";
import { BsFillPlusCircleFill } from "react-icons/bs";
function Profile() {
  return (
    <>
      <div id="profile-main">
        <div  className="profile-pic-div">
          <Card id="profileCard" style={{ width: "20rem", height:"28rem",marginTop:"3rem" ,display:"flex" ,alignItems:"center" ,border:"none" }}>
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
              {" "}
              <BsFillPlusCircleFill style={{ width: 30, height: 30 }} />{" "}
            </button>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Hiran Raj</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Profile;
