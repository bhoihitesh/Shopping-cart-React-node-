import React, { useEffect, useState } from "react";
import "./product.scss";
import image1 from "../assets/images/delicious-food-table.jpg";
import image2 from "../assets/images/freshly-baked-naan-bread-rustic-wood-bowl-generated-by-ai.jpg";
import image3 from "../assets/images/photo-traditional-indian-food-dish-celebrate-diwali.jpg";
import ingredients from "../assets//images/flat-lay-flexitarian-diet-pot.png";
import deliciouse from "../assets/images/flexitarian-diet-pot-view.png";
import specialDish1 from "../assets/images/pexels-foodie-factor-162291-539451.jpg";
import chef1 from "../assets/images/portrait-man-smiling-kitchen.png";
import chef2 from "../assets/images/chef-with-thumb-up-white-background.png";
import chef3 from "../assets/images/pleased-young-beautiful-girl-chef-uniform-points-with-hand-side-isolated-orange-wall.png";
import chef4 from "../assets/images/confused-young-female-cook-wearing-chef-uniform-holding-crossing-frying-pan-with-ladle-isolated-white-background.png";
import axios from "axios";
import { useGetFoodItemsQuery } from "../api/apiSlice";
const Home = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [productCategory, setProductCategory] = useState("all");
  const [loading, setLoading] = useState(true);

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
      name: "dcjndc",
      type: "chef",
    },
    {
      id: 2,
      name: "dcjndc",
      type: "chef",
    },
    {
      id: 2,
      name: "dcjndc",
      type: "chef",
    },
    {
      id: 2,
      name: "dcjndc",
      type: "chef",
    }
  ];
  return (
    <>
      <div className="container-fluid home-container">
        {/* Food carusel section */}
        <div className="row">
          <div className="col-xl-12">
            <div className="carousel-container">
              <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    className="active bg-white"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    className="bg-white"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    className="bg-white"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div
                    className="carousel-item food-item1 active"
                    data-bs-interval="10000"
                  >
                    <img src={image1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-md-block">
                      <h5 className="text-white">Breakfast</h5>
                      <p className="text-white">
                        Some representative placeholder content for the first
                        slide.
                      </p>
                      <div className="hover-buttons">
                        <button className="btn rounded-5">View menu</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="carousel-item food-item2"
                    data-bs-interval="2000"
                  >
                    <img src={image2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-md-block">
                      <h5 className="text-white">Lunch</h5>
                      <p className="text-white">
                        Some representative placeholder content for the second
                        slide.
                      </p>
                      <div className="hover-buttons">
                        <button className="btn rounded-5">View menu</button>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item food-item3">
                    <img src={image3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-md-block">
                      <h5 className="text-white">Dinner</h5>
                      <p className="text-white">
                        Some representative placeholder content for the third
                        slide.
                      </p>
                      <div className="hover-buttons">
                        <button className="btn rounded-5">View menu</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon text-bg-dark rounded-circle"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon text-bg-dark rounded-circle"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
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
        <div className="container our-chef-container">
          <p className="chef-container-title">Our chefs</p>
          <div className="row chef-main-section">
            {chefObj.map((item, index) => {
              console.warn("items", item);
              return (
                <>
                  <div className="col-lg-4 col-md-4 col-sm-12 first-chef-section chef-section">
                    <div className="chef-img">
                      <img src={chef2} alt="chef" className="chef-image" />
                    </div>
                    <p className="chef-name">Martin deloit</p>
                    <p className="chef-type">Chef</p>
                    <div className="know-more-btn">
                      <button>Know more</button>
                    </div>
                  </div>
                </>
              );
            })}
            {/* <div className="first-chef-section chef-section">
              <div className="chef-img">
                <img src={chef2} alt="chef" className="chef-image" />
              </div>
              <p className="chef-name">Martin deloit</p>
              <p className="chef-type">Chef</p>
              <div className="know-more-btn">
                <button>Know more</button>
              </div>
              </div>
              <div className="second-chef-section chef-section">
              <div className="chef-img">
                <img src={chef2} alt="chef" className="chef-image" />
              </div>
              <p className="chef-name">Johny classen</p>
              <p className="chef-type">Chef</p>
              <div className="know-more-btn">
                <button>Know more</button>
              </div>
              </div>
              <div className="third-chef-section chef-section">
              <div className="chef-img">
                <img src={chef2} alt="chef" className="chef-image" />
              </div>
              <p className="chef-name">mark vitori</p>
              <p className="chef-type">Chef</p>
              <div className="know-more-btn">
                <button>Know more</button>
              </div>
              </div>
              <div className="fourth-chef-section chef-section">
              <div className="chef-img">
                <img src={chef2} alt="chef" className="chef-image" />
              </div>
              <p className="chef-name">mark vitori</p>
              <p className="chef-type">Chef</p>
              <div className="know-more-btn">
                <button>Know more</button>
              </div>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
