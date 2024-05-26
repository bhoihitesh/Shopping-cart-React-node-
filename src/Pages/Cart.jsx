import React, { useEffect, useState } from "react";
import "./cart.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import checkOut from "../assets/images/icons8-checkout-30.png";
import deleteProduct from "../assets/images/icons8-delete-30.png";
import deleteProductPopup from "../assets/images/icons8-delete-48.png";
import continueShopping from "../assets/images/Product hunt-bro.png";
import { FaPlus } from "react-icons/fa6";
import { FaMinus, FaTrash, FaHeart } from "react-icons/fa";
const Cart = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [openDelModel, setOpenDelModel] = useState(false);
  const [emptyCart, setEmptyCart] = useState(true);
  const [delItemId, setDelItemId] = useState("");
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const api = import.meta.env.VITE_API;
  let totalPrice = 0;
  const getProducts = async () => {
    let res = await axios.get(`${api}/cart-products`);
    res.status == "200" ? setLoading(false) : setLoading(true);
    res.status == 200
      ? setAllProduct(res.data && res.data.getCartProducts)
      : "";
  };
  useEffect(() => {
    getProducts();
  }, []);

  setInterval(() => {
    setEmptyCart(false);
  }, 2000);

  const removeCartitem = async () => {
    let res = await axios.delete(`${api}/remove-cart-product`, {
      data: { delItemId },
    });
    res.status == "200" ? getProducts() : "";
    res.status == "200" ? setOpenDelModel(false) : "";
    res.status == "200" ? setLoading(false) : setLoading(true);
  };
  const handleOpenDeletemodel = (item) => {
    setDelItemId(item._id);
    setOpenDelModel(!openDelModel);
  };
  const handleDecreaseCount = (itemId, newQuantity) => {
    setAllProduct((prevProducts) =>
      prevProducts.map((product) => {
        return product._id == itemId._id
          ? { ...product, quantity: newQuantity - 1 }
          : product;
      })
    );
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setAllProduct((prevProducts) =>
      prevProducts.map((product) => {
        return product._id == itemId._id
          ? { ...product, quantity: newQuantity + 1 }
          : product;
      })
    );
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    allProduct.forEach((item) => {
      totalPrice += item.price * (item.quantity || 1);
    });
    return Math.floor(totalPrice);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around">
          <div className="card mb-4 col-lg-8">
            <div className="card-header py-3">
              <h5 className="mb-0">Cart - {allProduct.length} items</h5>
            </div>
            <div className="cardBody">
              {/* <!-- Single item --> */}
              <div className="row d-flex justify-content-between align-item-center gap-4 p-4">
                {allProduct.map((item, i) => {
                  const mapData = item;
                  const quantity =
                    mapData.quantity == undefined ? 1 : mapData.quantity;
                  const price = mapData.price * quantity;
                  totalPrice = price;
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

                      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 d-flex flex-column justify-content-between">
                        {/* <!-- Data --> */}
                        <div className="product-name">
                          <p>
                            <strong>{mapData.name}</strong>
                          </p>
                          <strong className="fw-medium">Description</strong>
                        </div>
                        <p className="">
                          Lorem ipsum dolor sit amet consectetur adipisicing...
                        </p>
                        <div className="product-btns d-flex justify-content-between">
                          <button
                            type="button"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-tooltip-init
                            title="Remove item"
                            onClick={() => handleOpenDeletemodel(mapData)}
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
                        </div>
                        {/* <!-- Data --> */}
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 m-auto">
                        {/* <!-- Quantity --> */}
                        <div
                          className="d-flex mb-2"
                          style={{ maxWidth: "300px" }}
                        >
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary px-3 me-2"
                            onClick={() =>
                              handleDecreaseCount(mapData, quantity)
                            }
                            disabled={quantity == 1}
                          >
                            <FaMinus />
                          </button>

                          <div data-mdb-input-init className="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={quantity}
                              type="text"
                              className="form-control text-center"
                              onChange={(e) => handleQuantityChange(e)}
                            />
                            <label
                              className="form-label fw-medium text-center w-100"
                              htmlFor="form1"
                            >
                              Quantity
                            </label>
                          </div>

                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary px-3 ms-2"
                            onClick={() =>
                              handleQuantityChange(mapData, quantity)
                            }
                          >
                            <FaPlus />
                          </button>
                        </div>
                        {/* <!-- Quantity --> */}

                        {/* <!-- Price --> */}
                        <p className="text-start text-md-center">
                          <strong className="fs-5">{price}</strong>
                        </p>
                        {/* <!-- Price --> */}
                      </div>

                      {/* delete model */}
                      <div
                        className={`${
                          openDelModel
                            ? "delete-model shadow p-3 rounded delete-box"
                            : "d-none"
                        }`}
                      >
                        <div className="delete-dialog-box bg-white">
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="fs-5 p-0 m-0 text-nowrap delete-warning">
                              Do you really want to delete?
                            </p>
                            <img
                              src={deleteProductPopup}
                              alt="delete product"
                              style={{ width: "100px" }}
                            />
                          </div>
                          <div className="delete-btn-group d-flex justify-content-center gap-4">
                            <button
                              className="btn btn-danger"
                              onClick={() => removeCartitem(item)}
                            >
                              Delete
                            </button>
                            <button
                              className="btn btn-warning"
                              onClick={() => setOpenDelModel(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Total price
                    <span>₹{calculateTotalPrice()}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping charges
                    <span>₹0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div className="w-100">
                      <strong className="d-flex justify-content-between w-100">
                        Total amount{" "}
                        <p>
                          ₹
                          {Math.floor(
                            calculateTotalPrice() +
                              (calculateTotalPrice() * 18) / 100
                          )}
                        </p>
                        <p className="mb-0">(including GST 18%)</p>
                      </strong>
                    </div>
                  </li>
                </ul>

                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg btn-block fs-5"
                >
                  Go to checkout
                </button>
                <p className="text-danger">comming soon!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
