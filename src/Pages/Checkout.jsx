import React from "react";
import "./checkout.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
const Checkout = () => {
    const {id} = useParams();
    const api = import.meta.env.VITE_API
    const ProductDetailApiCall = async() =>{
        const res= await axios.get(`${api}/get-product/${id}`);
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
