import React from 'react'
import './auth.scss'
import bellaChef from '../assets/logo/bella-chef.png'
const Auth = () => {
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
                           <p className='login-btn' >Login</p> 
                           <p className='signup-btn' >Sign-up</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Auth
