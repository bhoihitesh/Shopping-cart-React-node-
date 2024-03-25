import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
import veg from "../assets/images/icons8-veg-48.png";
import nonVeg from "../assets/images/icons8-non-veg-48.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [allProduct, setAllProduct] = useState([]);
  const getProducts = async () => {
    let res = await axios.get("http://localhost:5000/api/products");
    res.status == 200 ? setAllProduct(res.data && res.data.getProducts) : "";
  };

  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();

  console.warn("response", allProduct);
  // handle add to cart function
  const handleAddcart = async (item) => {
    console.log("id", item);

    let res = await axios.post("http://localhost:5000/api/add-to-cart", { item });
    console.log("post product",res)
    res.status == "200" ? navigate("/cart") : "";
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {allProduct.map((item, index) => {
            return (
              <>
                <div className="col-lg-3 col-md-6 col-sm-12 p-3">
                  <div className="card rounded-3 border-0" key={index + 1}>
                    <img src={item.img} alt="img" className="rounded-2" />
                    <div
                      className="card-title product-name text-nowrap fw-normal"
                      style={{ fontSize: "15px" }}
                    >
                      {item.name}
                    </div>
                    {/* <div className="card-title product-category">{item.category}</div> */}
                    <div className="product-price-section m-0 d-flex justify-content-between align-items-center">
                      <div className="product-price">
                        <p className="m-0 p-0">
                          <span className="fs-5 fw-medium">₹</span>
                          <span className="fs-5 fw-medium">{item.price}</span>
                        </p>
                        <p className="product-discount fs-6 fw-medium d-flex gap-1">
                          {item.discount + " OFF"}
                          <div className="card-title product-type">
                            {item.type == "veg" ? (
                              <img
                                src={veg}
                                alt="veg"
                                style={{ width: "20px" }}
                              />
                            ) : (
                              <img
                                src={nonVeg}
                                alt="nonVeg"
                                style={{ width: "20px" }}
                              />
                            )}
                          </div>
                        </p>
                      </div>
                      <div className="add-product d-flex gap-2">
                        <button className="btn btn-outline-success rounded-pill px-4">
                          Buy
                        </button>
                        <button
                          className="btn btn-outline-warning rounded-pill px-4"
                          onClick={() => handleAddcart(item)}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;