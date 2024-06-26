import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Pages/Home.jsx";
import {
  Route,
  Router,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Crickscore from "./Crickscore.jsx";
import Splash from "./Components/Splash.jsx";
import Product from "./Pages/Product.jsx";
import Auth from "./Components/Auth.jsx";
const App = () => {
  const [splashBack, setSplashBack] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isCheckoutPage = location.pathname.startsWith("/checkout");
  const isLoginPage = location.pathname.startsWith("/login");
  const isLoggedIn = localStorage.getItem("loggedIn");
  console.warn(isLoggedIn);
  useEffect(() => {
    // setTimeout(() => {
    //   setSplashBack(true);
    // }, 5000);

    if (splashBack) {
      // navigate("/");
    } else {
      // navigate("/home");
    }
  }, []);

  useEffect(()=>{
    if(isLoggedIn){
      setTimeout(() => {
        setSplashBack(true);
        navigate('/home')
      }, 3000);
    }
  },[isLoggedIn])
  return (
    <>
      {/* {!isCheckoutPage && <Navbar />} */}
      {/* {splashBack ? navigate('/home') : navigate('/')} */}
      {splashBack ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/live-cricket-score" element={<Crickscore />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/view-product/:id" element={<ProductDetail />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <Footer />
        </>
      ) : !isLoggedIn ? (
        <Auth />
      ) : (
        <Splash />
      )}
      {/* {splashBack ? 
      !isLoggedIn ? 
      <Auth/>
      :
      (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/live-cricket-score" element={<Crickscore />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/view-product/:id" element={<ProductDetail />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          <Footer/>
        </>
      ) : (
        <Splash />
      )} */}
    </>
  );
};

export default App;
