import React, { useState,useEffect } from "react";
import Product from "../Product/Product";
import "./Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { db } from "../Firebase/firebase";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);


function Home() {
  const [products, setProducts] = useState([]);
  const [filter_products, setProductsFilter] = useState([]);
  let product=[];

  const filter=()=>{
console.log('sfg',products.filter((ele)=>{return ele.product_id==9 || ele.product_id==10}));
    
setProductsFilter(products.filter((ele)=>{return ele.product_id==9 || ele.product_id==10}));
  }
  const unfilter=()=>{
       
    setProductsFilter(products);
      }
  
  useEffect(()=>{
  
  db.collection("categories")
    .get()
    .then((querySnapshot) => {
     
      querySnapshot.forEach((docs) => {
        product.push(docs.data().products)
     
      });
  
      setProducts(product);
      setProductsFilter(product);
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
      });
 
    },[]);
    
  return (
  
    <div className="home">
      <div className="home__container">
        <Swiper navigation={true} className="mySwiper">
          <SwiperSlide>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt="home_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/51r+YpWo9rL._SX1500_.jpg"
              alt="home_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/I/51r+YpWo9rL._SX1500_.jpg"
              alt="home_img"
            />
          </SwiperSlide>
        </Swiper>
       
    
    {filter_products?.map((ele) => (
      
      <div className="home__row">

      <Product
      key={ele.product_id}
      id={ele.product_id}
      title={ele.product_description}
      image={ele.product_images[0]}
      price={ele.product_price}
      rating={Math.floor(ele.product_rating/ele.product_users_rating)}
    />
    </div>
    ))}
    <button onClick={()=>{filter()}}>Filter</button>
    <button onClick={()=>{unfilter()}}>Filter</button>
      </div>
    </div>
  );
}

export default Home;
