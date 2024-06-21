import React from 'react'
import './login.scss'
const Login = () => {
  function one(){
    console.log(name);
  }
  function two(){
    var name = "Code for interview";
    one();
  }
  var name = "hitesh bhoi";
  two();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center align-items-center">
                <div className="login-form-container d-flex flex-column justify-content-center align-items-center gap-3">
                    <div className="email-input d-flex flex-column w-100">
                        <label htmlFor='email' className='email-lable'>Email address</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="password-input d-flex flex-column w-100">
                        <label htmlFor='pass' className='password-lable'>Password</label>
                        <input type="pass" id="pass" />
                    </div>
                    <div className="forgot-passcode w-100">
                    <p>Forgot passcode?</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
