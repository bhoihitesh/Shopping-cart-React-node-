import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
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
const App = () => {
  const location = useLocation();
  const isCheckoutPage = location.pathname.startsWith("/checkout");
  const isLoginPage = location.pathname.startsWith("/login");
  return (
    <>
      {/* {!isCheckoutPage && <Navbar />} */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-cricket-score" element={<Crickscore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/view-product/:id" element={<ProductDetail />} />
        <Route path="/checkout/:id" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;
