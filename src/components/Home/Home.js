import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51r+YpWo9rL._SX1500_.jpg"
          alt="home_img"
        />
        <div className="home__row">
          <Product
            id="10"
            title="The lean Startup"
            image="https://www.maktabahbookshop.com/wp-content/uploads/2021/09/products-7-2.png"
            price={20}
            rating={2}
          />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
