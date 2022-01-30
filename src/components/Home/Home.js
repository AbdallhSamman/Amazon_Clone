import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./Home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "@mui/material/Slider";
import { StarIcon } from "@heroicons/react/solid";
import Videos from '../Videoes/Videos'
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
  const [priceFilter, setPriceFilter] = useState(999);
  const [rateFilter, setRateFilter] = useState(5);
  const [search, setSearch] = useState("");
  let product = [];

  const returnProduct = (element) => {
    const prod = element.map((elemento, index) => {
      if (elemento.product_price <= priceFilter) {
        let proRate = elemento.product_rating / elemento.product_users_rating;
        if (proRate <= rateFilter) {
          
          if(elemento.product_name.toLowerCase().includes(search.toLowerCase()) || elemento.product_description.toLowerCase().includes(search.toLowerCase())){
            return (
              <Product
                key={elemento.product_id}
                id={elemento.product_id}
                title={elemento.product_name}
                price={elemento.product_price}
                description={elemento.product_description}
                image={elemento.product_images[0]}
                rating={Math.floor(
                  elemento.product_rating / elemento.product_users_rating
                )}
              />
            );
          }
      
        }
      }
    });
    return prod;
  };

  const unfilter = () => {
    setPriceFilter(999);
    setRateFilter(5);
  };

  useEffect(() => {
   
    db.collection("categories").orderBy('products')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((docs) => {
          product.push(docs.data().products);
        });
        let searchBar=document.getElementById('search');
        searchBar.addEventListener('change',(e)=>{
          setSearch(e.target.value);
        }); 
        setProducts(product);
        setProductsFilter(product);
      
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <Swiper navigation={true} className="mySwiper">
        
           
          
          <SwiperSlide>
            <img
              className="home__image swiper-image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt="home_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home__image swiper-image"
              src="https://m.media-amazon.com/images/I/51r+YpWo9rL._SX1500_.jpg"
              alt="home_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="home__image swiper-image"
              src="https://m.media-amazon.com/images/I/51r+YpWo9rL._SX1500_.jpg"
              alt="home_img"
            />
          </SwiperSlide>
        </Swiper>

        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
          {filter_products
            .slice(0, 4)
            .map((elee, index) => returnProduct(elee))}

          <img
            className="md:col-span-full"
            src="https://links.papareact.com/dyz"
            alt=""
          />

          <div className="md:col-span-2">
            {filter_products
              .slice(4, 5)
              .map((ele, index) => returnProduct(ele))}
          </div>

          
        </div>
        <button
          onClick={() => {
            unfilter();
          }}
        >
          Filter
        </button>
        <span className="h-5 w-5 stars">
          <StarIcon
            className="h-5 w-5"
            onClick={() => {
              setRateFilter(1);
            }}
          />
          <StarIcon
            className="h-5 w-5"
            onClick={() => {
              setRateFilter(2);
            }}
          />
          <StarIcon
            className="h-5 w-5"
            onClick={() => {
              setRateFilter(3);
            }}
          />
          <StarIcon
            className="h-5 w-5"
            onClick={() => {
              setRateFilter(4);
            }}
          />
          <StarIcon
            className="h-5 w-5"
            onClick={() => {
              setRateFilter(5);
            }}
          />
        </span>

        <Slider
          min={0}
          max={999}
          defaultValue={50}
          onChange={(e) => {
            setPriceFilter(e.target.value);
          }}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        
        <Videos/>
        
        {/* <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
        {products?.map((ele, index) => (
            <Product
              key={index}
              id={ele.product_id}
              title={ele.product_description}
              image="https://m.media-amazon.com/images/I/714im+KNaqL._SL1500_.jpg"
              price={ele.product_price}
              rating={2}
            />
            ))}
            </div> */}
      </div>
    </div>
  );
}

export default Home;
