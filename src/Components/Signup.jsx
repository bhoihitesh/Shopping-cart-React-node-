import React from "react";
import "./signup.scss";
const Signup = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-12 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <div className="signup-form-container d-flex flex-column justify-content-center align-items-center gap-3">
              <div className="name-input d-flex align-items-center gap-2 w-100">
              <div className="signup-fname-input w-100">
                <label htmlFor="fname" className="signup-fname-lable">
                  First name
                </label>
                <input type="text" id="fname" className="w-100"/>
              </div>
              <div className="signup-lname-input w-100">
                <label htmlFor="lname" className="signup-lname-lable">
                  Last name
                </label>
                <input type="text" id="lname" className="w-100"/>
              </div>
              </div>
              <div className="signup-email-input d-flex flex-column w-100">
                <label htmlFor="email" className="signup-email-lable">
                  Email address
                </label>
                <input type="email" id="signup-email" />
              </div>
              <div className="signup-password-input d-flex flex-column w-100">
                <label htmlFor="pass" className="signup-password-lable">
                  Password
                </label>
                <input type="password" id="signup-pass" />
              </div>
              <div className="signup-mobile-input d-flex flex-column w-100">
                <label htmlFor="mobile" className="signup-mobile-lable">
                  Mobile
                </label>
                <input type="text" id="mobile" />
              </div>
              <div className="redirect-login w-100">
                <span className="redirect-login-lable">Already register?</span>
              </div>
              <div className="proceed-to-signup w-100" style={{marginTop:'80px'}}>
                <button className="proceed-to-signup-btn w-100">Sign-up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
