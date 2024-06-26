import React, { useEffect, useState } from "react";
import "./product.scss";
import image1 from "../assets/images/delicious-food-table.jpg";
import image2 from "../assets/images/freshly-baked-naan-bread-rustic-wood-bowl-generated-by-ai.jpg";
import image3 from "../assets/images/photo-traditional-indian-food-dish-celebrate-diwali.jpg";
import ingredients from "../assets//images/flat-lay-flexitarian-diet-pot.png";
import deliciouse from "../assets/images/flexitarian-diet-pot-view.png";
import specialDish1 from "../assets/images/pexels-foodie-factor-162291-539451.jpg";
import chef1 from "../assets/images/chef1.png";
import chef2 from "../assets/images/chef2.png";
import chef3 from "../assets/images/chef3.png";
import chef4 from "../assets/images/chef4.png";
import alert from "../assets/images/icons8-alert.gif";
import pizza from "../assets/images/pexels-ahmad-nawawi-285301-2714722-removebg.png";
import axios from "axios";
import { useGetFoodItemsQuery } from "../api/apiSlice";
const Home = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [productCategory, setProductCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [alertBox, setAlertBox] = useState(true);

  const api = import.meta.env.VITE_API;

  const { data, isLoading } = useGetFoodItemsQuery();
  const getProducts = async () => {
    let res = await axios.get(`${api}/products`);
    res.status == 200 ? setAllProduct(res.data && res.data.getProducts) : "";
    res.status == 200 ? setAPIData(res.data && res.data.getProducts) : "";
    res.status == 200 ? setLoading(false) : setLoading(true);
  };

  useEffect(() => {
    getProducts();
    isLoading ? setLoading(true) : setAPIData(data.getProducts);
  }, []);

  const chefObj = [
    {
      id: 1,
      name: "Martin monrow",
      type: "chef",
      img: chef1,
    },
    {
      id: 2,
      name: "Kely roy",
      type: "chef",
      img: chef2,
    },
    {
      id: 3,
      name: "Dwen smith",
      type: "chef",
      img: chef3,
    },
    {
      id: 4,
      name: "Kelwin lysh",
      type: "chef",
      img: chef4,
    },
  ];
  return (
    <>
      <div className="container-fluid home-container">
        {/* Food home-page section */}
        <div className="row">
          <div className="col-lg-12">
            <div className="food-container">
              <div className="food-para">
                <div className="food-title">
                  <p>Enjoy your healty delicious food</p>
                </div>
                <div className="food-desc">
                  <p>
                    Fresh and delicious food that brings happiness, We serve the food
                  for your mood.
                  </p>
                </div>
                <div className="food-btns">
                  <button className="book-btn">Book a table</button>
                  <button className="play-btn">Play</button>
                </div>
              </div>
              <div className="food-img">
                <img src={"https://bootstrapmade.com/demo/templates/Yummy/assets/img/hero-img.png"} alt="pizza" />
              </div>
            </div>
          </div>
        </div>

        {/* food highlight section */}
        <div className="food-item-container">
          <p className="food-title">Delicious food for you</p>
          <div className="food-category">
            <span>Foods</span>
            <span>Drikns</span>
            <span>Snacks</span>
          </div>
          <div className="food-card">
            {/* <div className="row row-gap-4 justify-content-center"> */}
            <div className="see-more">
              <span>See more</span>
            </div>
            <div className="food-card-menubar">
              {APIData.slice(0, 3).map((item, index) => {
                return (
                  <div className="food-item-col" key={index}>
                    <div className="foodcard-container border-0">
                      <div className="food-image">
                        <img
                          src={item.img}
                          alt="food item"
                          className="foodItem"
                        />
                      </div>
                      <div className="food-details">
                        <p className="food-name">{item.name}</p>
                        <p className="food-price">{"Rs." + item.price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Food tips & tricks */}
        <div className="row food-tips-tricks-container">
          <div className="col-12">
            <div className="food-tips-tricks">
              <div className="background-ingredients-image">
                <img
                  src={ingredients}
                  alt="ingredients"
                  className="food-ingredients"
                />
              </div>
              <div className="background-deliciouse-image">
                <img
                  src={deliciouse}
                  alt="ingredients"
                  className="deliciouse-food"
                />
              </div>
              <div className="food-tips-desc">
                <p className="food-desc-title">
                  Pure ingredients, Delicious food
                </p>
                <p className="food-short-desc">
                  Some trendy and practical hacks for you
                </p>
                <button className="btn food-tips-btn">Tips & Tricks</button>
              </div>
            </div>
          </div>
        </div>

        {/* special dishes */}
        <p className="special-dish-title">Our special dishes</p>
        <div className="special-dishes">
          <div className="popular-food-section-one">
            <div className="popular-food-image">
              <img
                src={specialDish1}
                alt="special dish"
                className="first-food-section"
              />
            </div>
            <div className="special-food-title">
              <span>Special kadhi</span>
            </div>
            <div className="special-food-desc">
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                libero facere, praesentium cupiditate distinctio rerum explicabo
                veritatis sed consequatur perspiciatis? libero facere,
                praesentium cupiditate distinctio rerum explicabo veritatis sed
                consequatur perspiciatis?
              </span>
            </div>
          </div>
          <div className="popular-food-section-two d-flex flex-column justify-content-between gap-sm-3">
            <div className="food-item-one d-sm-flex">
              <div className="popular-food-image-first d-flex">
                <img
                  src={specialDish1}
                  alt="special dish"
                  className="first-foodItem-section"
                />
              </div>
              <div className="food-item-desc d-flex flex-column align-items-start">
                <div className="special-food-title">
                  <span>Special kadhi</span>
                </div>
                <div className="special-food-desc-first">
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                    libero facere, praesentium cupiditate distinctio rerum
                    explicabo veritatis sed consequatur perspiciatis? libero
                    facere, praesentium cupiditate distinctio rerum explicabo
                    veritatis sed consequatur perspiciatis?
                  </span>
                </div>
              </div>
            </div>

            <div className="food-item-two d-flex gap-2">
              <div className="popular-food-image-second d-flex">
                <img
                  src={specialDish1}
                  alt="special dish"
                  className="first-foodItem-section"
                />
              </div>
              <div className="food-item-desc d-flex flex-column align-items-start">
                <div className="special-food-title">
                  <span>Special kadhi</span>
                </div>
                <div className="special-food-desc-second">
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                    libero facere, praesentium cupiditate distinctio rerum
                    explicabo veritatis sed consequatur perspiciatis? libero
                    facere, praesentium cupiditate distinctio rerum explicabo
                    veritatis sed consequatur perspiciatis?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our chef */}
        <div className="container-fluid our-chef-container">
          <p className="chef-container-title">Our chefs</p>
          <div className="row chef-main-section">
            {chefObj.map((item, index) => {
              console.warn("items", item);
              return (
                <>
                  <div className="col-lg-4 col-md-4 col-sm-12 first-chef-section chef-section">
                    <div className="chef-img">
                      <img src={item.img} alt="chef" className="chef-image" />
                    </div>
                    <p className="chef-name">{item.name}</p>
                    <p className="chef-type">{item.type}</p>
                    <div className="know-more-btn">
                      <button>Know more</button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* Contact us */}
        <div className="contact-us-container">
          <p className="contact-title">Contact us</p>
          <div className="contact-us-section">
            {/* <div className="brand-logo">
              <img src={logo} alt="logo" className="brand-logo" />
            </div> */}
            <div className="fname-section w-100">
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                className="form-control"
                id="fname"
                autoComplete="on"
              />
            </div>
            <div className="lname-section w-100">
              <label htmlFor="lname">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lname"
                autoComplete="on"
              />
            </div>
            <div className="email-section w-100">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                autoComplete="on"
              />
            </div>
            <div className="phone-section w-100">
              <label htmlFor="phone">Mobile</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                autoComplete="on"
              />
            </div>
            <div className="address-section w-100">
              <label htmlFor="address">Address</label>
              <textarea
                className="form-control"
                id="address"
                cols="30"
                rows="3"
              />
            </div>
            <div className="submit-btn-section">
              <button className="contact-btn">Contact us</button>
            </div>
          </div>
        </div>

        <div className="alert-container">
          <div className={`${alertBox ? "alert-main-box" : "d-none"}`}>
            <div className="alert-image">
              <img src={alert} alt="alert" className="alert-image" />
            </div>
            <p className="alert-msg">
              This site is under the development, some UI and functionalities is
              borken or coming soon.
            </p>
            <button className="alert-ok-btn" onClick={() => setAlertBox(false)}>
              Ok
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
