 <div className="row gap-2" style={{ height: "70vh" }}>
          {loading ? (
            <div className="d-grid justify-content-center align-items-center loader-div">
              <span className="loader"></span>
            </div>
          ) : (
            <>
              {allProduct.length > 0 ? (
                allProduct.map((item, index) => {
                  return (
                    <>
                      {/* <div className="col-lg-6 col-md-6 col-sm-12 p-3">
                        <div
                          className="card rounded-3 border-0"
                          key={index + 1}
                        >
                          <img src={item.img} alt="img" className="rounded-2 cart-image" />
                          <div
                            className="card-title product-name text-nowrap fw-normal"
                            style={{ fontSize: "15px" }}
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
                              <button className="btn p-0 m-0">
                                <img src={checkOut} alt="checkout product" />
                              </button>
                              <button
                                className="btn p-0 m-0"
                                onClick={() => handleOpenDeletemodel(item)}
                              >
                                <img src={deleteProduct} alt="delete product" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div> */}

                      <div className="col-lg-5">Checkout summery</div>
                      {/* delete model
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
                      </div> */}
                    </>
                  );
                })
              ) : (
                <>
                  {emptyCart ? (
                    <div className="d-grid justify-content-center align-items-center loader-div">
                      <span className="loader"></span>
                    </div>
                  ) : (
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src={continueShopping}
                        alt="continueShopping"
                        className="continueShopping"
                      />
                      <button
                        className="btn btn-warning"
                        onClick={() => navigate("/")}
                      >
                        Continue shopping
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>