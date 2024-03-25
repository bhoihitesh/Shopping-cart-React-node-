import React, { useState } from "react";
import "./navbar.scss";
import brand from "../assets/logo/brand.png";
import cart from "../assets/images/icons8-cart-24.png";
import notification from "../assets/images/icons8-bell-24.png";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <>
      <div className="container-fluid navbar-main">
        <div className="row">
          <div className="col-lg-12 col-mf-6 col-sm-12 d-flex justify-content-start align-items-center">
            <div className="navbar-container d-flex justify-content-between align-items-center w-100 px-1 flex-sm-row flex-column">
              <div className="navbar-brand d-flex justify-content-between align-items-center w-100 px-2">
                <img src={brand} alt="brand" />
                <RiMenu2Line
                  className="fs-1 d-sm-none"
                  onClick={() => setToggleNavbar(!toggleNavbar)}
                />
              </div>
              <div
                className={`${
                  toggleNavbar ? "d-none" : "d-block navbar-list-option "
                }`}
              >
                <ul className="list-group d-flex flex-row align-items-center flex-sm-row flex-column">
                  <li className="list-group-item border-0 fw-medium text-nowrap p-2">
                    Home
                  </li>
                  <li className="list-group-item border-0 fw-medium text-nowrap p-2">
                    Products
                  </li>
                  <li className="list-group-item border-0 fw-medium text-nowrap p-2">
                    Services
                  </li>
                  <li className="list-group-item border-0 fw-medium text-nowrap p-2">
                    Contact us
                  </li>
                  <li className="list-group-item border-0 fw-medium text-nowrap p-2">
                    About us
                  </li>
                </ul>
              </div>

              <div
                className={`${
                  toggleNavbar
                    ? "d-none"
                    : "navbar-cart-notification-container d-flex justify-content-between align-items-center gap-2"
                }`}
              >
                <div className="cart-section">
                  <img src={cart} alt="cart" />
                </div>
                <div className="notification-section">
                  <img src={notification} alt="notification" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
