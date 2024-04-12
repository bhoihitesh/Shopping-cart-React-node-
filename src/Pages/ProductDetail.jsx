import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./productDetails.scss";
const ProductDetail = () => {
  const [productData, setProductData] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const api = import.meta.env.VITE_API;
  const ProductDetailApiCall = async () => {
    const res = await axios.get(`${api}/get-product/${id}`);
    const response = await axios.get(`${api}/products`);
    const data = res.data;
    response.status == 200
      ? setCategory(response.data.getProducts)
      : setLoading(true);
    res.status == 200 ? setProductData([data]) : setLoading(true);
  };
  useEffect(() => {
    ProductDetailApiCall();
  }, [id]);

  const getProductByCategory = async () => {
    const filterData = category.filter((e,i)=>e.category.includes(productData[0]&&productData[0].getProduct.category))
    setCategoryData(filterData)
  }
  useEffect(()=>{
    getProductByCategory()
  },[productData])
  const handleQuantityChange = (e) => {
    const { value } = e.target;
    const regx = /^\d+$/;
    if (regx.test(count)) {
      setCount(1);
    } else {
      setCount(value);
    }
  };
  if (count == 0) {
    setCount(1);
  }
  const handleIncreaseCount = () => {
    setCount(count + 1);
  };
  const handleDecreaseCount = () => {
    setCount(count - 1);
  };
  const handleAddtoCart = async () => {
    const postData = productData[0].getProduct;
    navigate("/cart");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row gap-4">
          <div className="col-lg-5">
            <div className="product-detail-container px-1">
              {productData.map((item, i) => {
                const mapData = item.getProduct;
                return (
                  <div key={i+1}>
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
                            {mapData.price * count}
                          </span>
                        </p>
                        <p className="fw-medium">
                          <span>{mapData.discount}</span>
                          <span className="ps-1">OFF</span>
                        </p>
                      </div>
                      <div className="product-btns d-flex gap-2">
                        <button className="btn btn-outline-success">Buy</button>
                        <button
                          className="btn btn-outline-warning"
                          onClick={() => handleAddtoCart()}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                    <div className="quantity-btns d-flex justify-content-end gap-2 pt-2">
                      <button
                        className="btn btn-outline-secondary fw-bold"
                        onClick={() => handleDecreaseCount()}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={count}
                        className="quantity-input form-control text-center"
                        onChange={(e) => handleQuantityChange(e)}
                      ></input>
                      <button
                        className="btn btn-outline-secondary fw-bold"
                        onClick={() => handleIncreaseCount()}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="description-container">
              <p className="fs-3">Description</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, exercitationem mollitia similique recusandae odit ullam
                nobis in enim ex dolores eum sunt. Voluptates animi ipsum quo
                aliquid explicabo, iure consequatur nesciunt eligendi soluta
                dolorem ipsam ut maiores quidem obcaecati possimus provident
                quis repellendus hic? Autem tempora ipsa quis odio vitae impedit
                voluptates qui hic pariatur voluptas ea nesciunt, cupiditate
                beatae animi perspiciatis porro tempore. Perferendis temporibus
                aliquid ex. Eaque quia quos modi ad quaerat ipsam ab, reiciendis
                asperiores nulla vero. Repellendus nemo fuga obcaecati explicabo
                nesciunt beatae tempora inventore aliquid earum sint, neque
                corrupti, perferendis sapiente quidem! Repellendus, autem saepe.
              </p>
            </div>
            <div className="more-product-container">
              <p className="pt-2 fs-4">More food items</p>
              <div className="row">
                {categoryData.slice(0,3).map((item,i)=>{
                 return(
                  <div className="col-lg-4 col-sm-12" key={i+1}>
                  <div className="p-lg-1">
                    <div className="card border-0">
                      <img src={item.img} alt="food-image" className="foodImage rounded-2" />
                      <div className="title" style={{fontSize:'14px'}}>{item.name}</div>
                    </div>
                  </div>
                  </div>
                 ) 
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
