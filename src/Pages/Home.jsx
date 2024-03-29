import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
import veg from "../assets/images/icons8-veg-48.png";
import nonVeg from "../assets/images/icons8-non-veg-48.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [productCategory, setProductCategory] = useState("all");
  const [searchFood, setSearchFood] = useState("");
  const getProducts = async () => {
    let res = await axios.get("https://foodhunt-z2x3.onrender.com/api/products");
    console.warn("response header",res);
    res.status == 200 ? setAllProduct(res.data && res.data.getProducts) : "";
    res.status == 200 ? setAPIData(res.data && res.data.getProducts) : "";
  };

  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();

  // handle add to cart function
  const handleAddcart = async (item) => {
    let res = await axios.post(
      "https://foodhunt-z2x3.onrender.com/api/add-to-cart",
      {
        item,
      }
    );
    res.status == "200" ? navigate("/cart") : "";
  };

  useEffect(() => {
    const filterData = APIData.filter(
      (item) => item.category == productCategory
    );
    setAllProduct(filterData);
  }, [productCategory]);

  // search filter
  const handleSearchFilter = (e) => {
    const { value } = e.target;
    let searchFilter = APIData.filter((item) => {
      const name = item.name.toLowerCase().includes(value);
      const price = item.price.toString().includes(value);
      const category = item.category.includes(value);
      const discount = item.discount.toString().includes(value);
      const type = item.type.includes(value);

      return category || price || name || discount || type;
    });
    console.warn(searchFilter);
    let searchData = APIData.filter((item) => item.category.includes(value));
    setAllProduct(value == "" ? APIData : searchFilter);
    setSearchFood(value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="searchbar-container w-100 d-flex justify-content-end align-items-center gap-4">
              <input
                type="text"
                className="form-control w-25"
                value={searchFood}
                placeholder="Search food by category..."
                onChange={(e) => handleSearchFilter(e)}
              />
              <div class="dropdown">
                <button
                  class="btn bg-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setAllProduct(APIData)}
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setProductCategory("burger")}
                    >
                      Burger
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setProductCategory("noodle")}
                    >
                      Noodle
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setProductCategory("sandwich")}
                    >
                      Sandwich
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
