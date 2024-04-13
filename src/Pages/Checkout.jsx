import React, { useEffect, useState } from "react";
import "./checkout.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import { FaMinus, FaTrash, FaHeart } from "react-icons/fa";
const Checkout = () => {
  const [productData, setProductData] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const api = import.meta.env.VITE_API;
  const ProductDetailApiCall = async () => {
    const res = await axios.get(`${api}/get-product/${id}`);
    res.status == 200 ? setProductData([res.data]) : setLoading(true);
  };
  useEffect(() => {
    ProductDetailApiCall();
  }, [id]);
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
  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4 gap-4">
            <div className="col-md-7">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - 2 items</h5>
                </div>
                <div className="cardBody">
                  {/* <!-- Single item --> */}
                  <div className="row d-flex justify-content-between gap-1 p-4">
                    {productData.map((item, i) => {
                      const mapData = item.getProduct;
                      return (
                        <>
                          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            {/* <!-- Image --> */}
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={mapData.img}
                                className="w-100 rounded-2"
                                alt="Blue Jeans Jacket"
                              />
                              <a href="#!">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                                  }}
                                ></div>
                              </a>
                            </div>
                            {/* <!-- Image --> */}
                          </div>

                          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            {/* <!-- Data --> */}
                            <p>
                              <strong>{mapData.name}</strong>
                            </p>
                            <button
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-primary btn-sm me-1 mb-2"
                              data-mdb-tooltip-init
                              title="Remove item"
                            >
                              <FaTrash />
                            </button>
                            <button
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-danger btn-sm mb-2"
                              data-mdb-tooltip-init
                              title="Move to the wish list"
                            >
                              <FaHeart />
                            </button>
                            {/* <!-- Data --> */}
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            {/* <!-- Quantity --> */}
                            <div
                              className="d-flex mb-2"
                              style={{ maxWidth: "300px" }}
                            >
                              <button
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-primary px-3 me-2"
                                onClick={() => handleDecreaseCount()}
                              >
                                <FaMinus />
                              </button>

                              <div data-mdb-input-init className="form-outline">
                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={count}
                                  type="text"
                                  className="form-control text-center"
                                  onChange={(e) => handleQuantityChange(e)}
                                />
                                <label
                                  className="form-label fw-medium"
                                  for="form1"
                                >
                                  Quantity
                                </label>
                              </div>

                              <button
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-primary px-3 ms-2"
                                onClick={() => handleIncreaseCount()}
                              >
                                <FaPlus />
                              </button>
                            </div>
                            {/* <!-- Quantity --> */}

                            {/* <!-- Price --> */}
                            <p className="text-start text-md-center">
                              <strong className="fs-5">
                                ₹{mapData.price * count}
                              </strong>
                            </p>
                            {/* <!-- Price --> */}
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                </div>
              </div>
            </div>
            {productData.map((item, i) => {
              const mapData = item.getProduct;
              return (
                <>
                  <div className="col-md-4">
                    <div className="card mb-4">
                      <div className="card-header py-3">
                        <h5 className="mb-0">Summary</h5>
                      </div>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Products
                            <span>₹{mapData.price}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                            Shipping
                            <span>Gratis</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                              <strong>Total amount</strong>
                              <strong>
                                <p className="mb-0">(including GST)</p>
                              </strong>
                            </div>
                            <span>
                              <strong>₹{mapData.price*count}</strong>
                            </span>
                          </li>
                        </ul>

                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-lg btn-block"
                          disabled
                        >
                          Go to checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
