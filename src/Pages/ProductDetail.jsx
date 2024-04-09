import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./productDetails.scss";
const ProductDetail = () => {
  const [productData, setProductData] = useState([]);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const api = import.meta.env.VITE_API;
  const ProductDetailApiCall = async () => {
    const res = await axios.get(`${api}/get-product/${id}`);
    const data = res.data;
    setProductData([data]);
  };
  useEffect(() => {
    ProductDetailApiCall();
  }, [id]);
  console.warn("data", productData);

  const handleQuantityChange = (e) => {
    const { value } = e.target;
    const regx = /^\d+$/;
    if (value <= 0) {
      setCount(1);
    } else {
      setCount(value);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5">
            <div className="product-detail-container px-1">
              {productData.map((item, i) => {
                const mapData = item.getProduct;
                return (
                  <>
                    <div className="product-image">
                      <img
                        src={mapData.img}
                        alt="product image"
                        className="product-image rounded-2"
                      />
                    </div>
                    <p>{mapData.name}</p>
                    <div className="d-flex justify-content-between align-items-center gap-2">
                      <div className="d-flex justify-content-start align-items-center gap-2">
                        <p className="m-0 p-0">
                          <span className="fs-5 fw-medium">₹</span>
                          <span className="fs-5 fw-medium">
                            {mapData.price}
                          </span>
                        </p>
                        <p className="fw-medium">
                          <span>{mapData.discount}</span>
                          <span className="ps-1">OFF</span>
                        </p>
                      </div>
                      <div className="product-btns d-flex gap-2">
                        <button className="btn btn-outline-success">Buy</button>
                        <button className="btn btn-outline-warning">
                          Add to cart
                        </button>
                      </div>
                    </div>
                    <div className="quantity-btns d-flex justify-content-end gap-2 pt-2">
                      <button
                        className="btn btn-outline-secondary fw-bold"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                      <input
                        type="text"
                        value={count}
                        className="quantity-input form-control text-center"
                        onChange={(e) => handleQuantityChange(e)}
                      ></input>
                      <button
                        className="btn btn-outline-secondary fw-bold"
                        onClick={() => setCount(count - 1)}
                      >
                        -
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
