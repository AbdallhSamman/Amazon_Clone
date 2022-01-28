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
            id="1"
            title="test one"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            price={11.99}
            rating={2}
          />
          <Product
            id="2"
            title="test two"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            price={22.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="test three"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            price={33.99}
            rating={1}
          />
          <Product
            id="4"
            title="test four"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            price={44.99}
            rating={4}
          />
          <Product
            id="5"
            title="test five"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            price={55.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="test six"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            price={66.99}
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
