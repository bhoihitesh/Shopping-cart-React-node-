import React from "react";
import "./footer.scss";
import logo from "../assets/logo/brand.png";
import fb from '../assets/images/icons8-facebook-50.png'
import yt from '../assets/images/icons8-youtube-50.png'
import insta from '../assets/images/icons8-instagram-50.png'
const Footer = () => {
  return (
    <>
      <div className="container-fluid footer-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-main-container">
              <div className="web-brand-logo">
                <div className="website-logo">
                <img src={logo} alt="logo" className="logo" />
                </div>

                <p className="brand-desc">
                  Welcome to Bella Olanje. This Website is owned
                  and operated by Dev.js technologies.
                </p>
              </div>

              <div className="web-content-1">
                <p>Home</p>
                <p>About us</p>
                <p>Blogs</p>
                <p>Contact us</p>
              </div>

              <div className="web-content-2">
                <p>Recipes</p>
                <p>Videos</p>
                <p>Health tips</p>
                <p>Articles</p>
                <p>FAQ</p>
              </div>

              <div className="web-content-3">
                <div className="social-links">
                  <p>Get in touch</p>
                  <p className="social-logo">
                  <span><img src={fb} alt="facebook" className="fb"/></span>
                  <span><img src={insta} alt="instagram" className="insta"/></span>
                  <span><img src={yt} alt="youtube" className="yt"/></span>
                  </p>
                </div>
                <p className="mobile-no">Call: +91-8200861893</p>
                <p className="email">Email: soft.dev@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
