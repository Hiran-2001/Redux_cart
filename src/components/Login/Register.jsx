import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [showPass, setShowPass] = useState(false);
  const [cshowPass, setCshowPass] = useState(false);

  const [inputValue, setInputValue] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  console.log(inputValue);
  const setValue = (e) => {
    //  console.log(e.target.value);
    const { name, value } = e.target;
    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };

  const addUser = (e) => {
    const { fname, email, password, cpassword } = inputValue;

    e.preventDefault();

    if (fname === "") {
      alert("please enter your name");
    }else if (email === "") {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("please enter valid email");
    } else if (password === "") {
      alert("please enter your password");
    } else if (password.length < 8) {
      alert("password must be 8 characters");
    } else if (cpassword === "") {
      alert("please confirm your password");
    } else if (cpassword.length < 8) {
      alert("cpassword must be 8 characters");
    } else if (password !== cpassword) {
      alert("password and confirm password doesnt match");
    } else {
      alert("user register successfully");
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="form">
          <Form>
            <h2>Signup</h2>
            <Form.Group className="mb-3">
              <Form.Control
                className="formControl"
                onChange={setValue}
                value={inputValue.fname}
                name="fname"
                type="text"
                placeholder="Full Name"
              />
            </Form.Group>
            <Form.Group className="mt-5">
              <Form.Control
                className="formControl"
                onChange={setValue}
                value={inputValue.email}
                name="email"
                type="email"
                placeholder="Email"
              />
            </Form.Group>

            <div className="password">
              <Form.Control
                className="formControl"
                onChange={setValue}
                type={!showPass ? "password" : "text"}
                value={inputValue.password}
                name="password"
                placeholder="Password"
              />
              <Button
                id="showPass"
                onClick={() => {
                  setShowPass(!showPass);
                }}
                style={{
                  width: 45,
                  height: 38,
                  marginTop: 20,
                  marginLeft: -30,
                  color: "white",
                }}
              >
                {!showPass ? <FaEyeSlash /> : <FaEye />}{" "}
              </Button>
            </div>

            <div className="password">
              <Form.Control
                className="formControl"
                onChange={setValue}
                type={!cshowPass ? "password" : "text"}
                value={inputValue.cpassword}
                name="cpassword"
                placeholder="Password"
              />
              <Button
                id="showPass"
                onClick={() => {
                  setCshowPass(!cshowPass);
                }}
                style={{
                  width: 45,
                  height: 38,
                  marginTop: 20,
                  marginLeft: -30,
                  color: "white",
                }}
              >
                {!cshowPass ? <FaEyeSlash /> : <FaEye />}{" "}
              </Button>
            </div>

            <Button onClick={addUser} className="form-btn mt-3" type="submit">
              Create Account
            </Button>

            <div className="sign-to-login">
              <h6>
                Already have an account ?{" "}
                <Link className="to-login" to={"/login"}>
                  Login
                </Link>
              </h6>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Register;
