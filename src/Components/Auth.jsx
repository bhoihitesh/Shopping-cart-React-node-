import React, { useEffect, useState } from 'react'
import './auth.scss'
import bellaChef from '../assets/logo/bella-chef.png'
import Login from './Login'
import Signup from './Signup'
const Auth = () => {
  const [loginBtn,setLoginBtn]=useState(true)
  const [signupBtn,setSignupBtn]=useState(false)

  const handleLoginclick = () => {
    setLoginBtn(true)
    setSignupBtn(false)
  }
  const handleSignupclick = () => {
    setSignupBtn(true)
    setLoginBtn(false)
  }

  useEffect(()=>{
    console.log("login",loginBtn)
    console.log("signup",signupBtn)
  },[loginBtn,signupBtn])
  return (
    <>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="auth-container">
                    <div className="auth-header-container">
                        <div className="web-logo-section text-center">
                            <img src={bellaChef} alt="bella chef" />
                        </div>
                        <div className="auth-btn-container d-flex justify-content-center align-items-center">
                           <p className={`${loginBtn ? 'active-login-btn login-btn':'login-btn'}`} onClick={()=>handleLoginclick()}>Login</p> 
                           <p className={`${signupBtn ? 'active-signup-btn signup-btn':'signup-btn'}`}  onClick={()=>handleSignupclick()}>Sign-up</p> 
                        </div>
                    </div>
                </div>
                <div className="auth-form-container">
                  {
                    loginBtn && !signupBtn ? <Login/> : <Signup/>
                  }
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Auth
