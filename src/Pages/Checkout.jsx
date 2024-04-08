import React from "react";
import "./checkout.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
const Checkout = () => {
    const {id} = useParams();

    const ProductDetailApiCall = async() =>{
        const res= await axios.get(`http://localhost:5000/api/get-product/${id}`);
    }
    ProductDetailApiCall()
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
