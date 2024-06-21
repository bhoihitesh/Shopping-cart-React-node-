import React, { useEffect } from 'react'
import './splash.scss'
import spinner from '../assets/animations/Animation - 1716667333864.gif'
import brand from '../assets/logo/brand.png'
import { useNavigate } from 'react-router-dom'
const Splash = () => {
  const navigate = useNavigate()

  
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="spalsh-container col-lg-12">
                <div className="splash-box">
                <img src={brand} alt="brand logo" />
                <span className='text-danger brand-slougan'>Food for everyone</span>
                <span><img src={spinner} alt="spinner" className='loading-spinner'/></span>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Splash
