import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const handleLogin=()=>{
      localStorage.setItem('loggedIn',true);
      setTimeout(() => {
        navigate('/home');
      }, 1000);
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-12 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <div className="login-form-container d-flex flex-column justify-content-center align-items-center gap-3">
              <div className="email-input d-flex flex-column w-100">
                <label htmlFor="email" className="email-lable">
                  Email address
                </label>
                <input type="email" id="email" />
              </div>
              <div className="password-input d-flex flex-column w-100">
                <label htmlFor="pass" className="password-lable">
                  Password
                </label>
                <input type="password" id="pass" />
              </div>
              <div className="forgot-passcode w-100">
                <span className="forgot-passcode-lable">Forgot passcode?</span>
              </div>
              <div className="proceed-to-login w-100" style={{marginTop:'80px'}}>
                <button className="proceed-to-login-btn w-100" onClick={()=>handleLogin()}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
