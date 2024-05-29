import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
import veg from "../assets/images/icons8-veg-48.png";
import nonVeg from "../assets/images/icons8-non-veg-48.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [productCategory, setProductCategory] = useState("all");
  const [searchFood, setSearchFood] = useState("");
  const [loading, setLoading] = useState(true);
  const [addCart, setAddCart] = useState(false);
  const api = import.meta.env.VITE_API;
  const getProducts = async () => {
    let res = await axios.get(`${api}/products`);
    res.status == 200 ? setAllProduct(res.data && res.data.getProducts) : "";
    res.status == 200 ? setAPIData(res.data && res.data.getProducts) : "";
    res.status == 200 ? setLoading(false) : setLoading(true);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();

  // handle add to cart function
  const handleAddcart = async (item) => {
    const addtocart = item._id;
    const response = await axios.get(`${api}/cart-products`);
    const cartProducts =
      response.status == "200" ? response.data.getCartProducts : "";
    const filteredProducts = cartProducts.filter((item) =>
      addtocart.includes(item._id)
    );
    let res;
    filteredProducts.length == 0
      ? (res = await axios.post(`${api}/add-to-cart`, {
          item,
        }))
      : setLoading(false);
    if (filteredProducts.length == 1) {
      setAddCart(true);
      toast.warning("Already added to the cart !");
      setTimeout(() => {
        setAddCart(false);
      }, 1000);
    } else {
      // Product already exists in the cart
      toast.success("Successfully added to the cart !");
      setTimeout(() => {
        navigate("/cart");
      }, 3000);
    }

    filteredProducts.length == 1 ? setLoading(false) : setLoading(true);
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
      const category = item.category.toLowerCase().includes(value);
      const discount = item.discount.toString().includes(value);
      const type = item.type.toString().toLowerCase().includes(value);
      return category || price || name || discount || type;
    });
    setAllProduct(value == "" ? APIData : searchFilter);
    setSearchFood(value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {loading ? (
              ""
            ) : (
              <div className="searchbar-container w-100 d-flex justify-content-end align-items-center gap-4">
                <input
                  type="text"
                  className="form-control searchbar-input"
                  value={searchFood}
                  placeholder="Search food by category..."
                  onChange={(e) => handleSearchFilter(e)}
                />
                <div className="dropdown">
                  <button
                    className="btn bg-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => setAllProduct(APIData)}
                      >
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => setProductCategory("burger")}
                      >
                        Burger
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => setProductCategory("pasta")}
                      >
                        Pasta
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => setProductCategory("noodle")}
                      >
                        Noodle
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => setProductCategory("sandwich")}
                      >
                        Sandwich
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="row" style={{height:'70vh'}}>
          {loading ? (
            <div className="d-grid justify-content-center align-items-center loader-div">
              <span className="loader"></span>
            </div>
          ) : (
            <>
              {allProduct.length > 0 ? (
                allProduct.map((item, index) => {
                  console.log('item',item.img)
                  return (
                    <>
                      <div className="col-lg-3 col-md-6 col-sm-12 p-3">
                        <div
                          className="card rounded-3 border-0"
                          key={index + 1}
                        >
                          <img
                            src={item.img}
                            alt="img"
                            className="rounded-2"
                            onClick={() =>
                              navigate(`/view-product/${item._id}`)
                            }
                            style={{ cursor: "pointer",height:'28vh' }}
                          />
                          <div
                            className="card-title product-name text-nowrap fw-normal"
                            style={{ fontSize: "15px", cursor: "pointer" }}
                            onClick={() =>
                              navigate(`/view-product/${item._id}`)
                            }
                          >
                            {item.name}
                          </div>
                          <div className="product-price-section m-0 d-flex justify-content-between align-items-center">
                            <div className="product-price">
                              <p className="m-0 p-0">
                                <span className="fs-5 fw-medium">₹</span>
                                <span className="fs-5 fw-medium">
                                  {item.price}
                                </span>
                              </p>
                              <p className="product-discount fs-6 fw-medium d-flex gap-1">
                                {item.discount == "none"
                                  ? ""
                                  : item.discount + " OFF"}
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
                              <button
                                className="btn btn-outline-success rounded-pill px-4"
                                onClick={() => navigate(`checkout/${item._id}`)}
                              >
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
                })
              ) : (
                <p className="text-center fs-3 fw-medium">Product not found</p>
              )}
            </>
          )}
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default Product;

