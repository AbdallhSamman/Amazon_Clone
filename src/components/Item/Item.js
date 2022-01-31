import { StarIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
// import "swiper/css/bundle";
import "./Item.css";
import "swiper/css/bundle";
import { CKEditor } from "ckeditor4-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { db } from "../Firebase/firebase";
import { useParams } from "react-router-dom";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import required modules

import { Pagination } from "swiper";
function Item() {
  const [item, setItem] = useState([]);
  const [related, setRelated] = useState([]);
  let product = [];
  let slider = [];
  let stars = [];

  const params = useParams();
  const itemId = params.itemId;
  const category = params.category;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    db.collection("categories")
      .where("category_name", "==", category)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let products = doc.data().products;
          slider.push(products);
          setRelated(slider);
          products.forEach((e) => {
            if (e.product_id == itemId) {
              product.push(e);
              setItem(product);
            }
          });
        });
      });
  }, []);

  let sliders = related[0]?.map((e, i) => {
    return (
      <SwiperSlide key={i}>
        <div>
          <img
            style={{ width: "300px", height: "200px", objectFit: "contain" }}
            className="object-contain"
            src={e.product_images[0]}
            alt="item"
          />
          <p className="text-[rgb(0,113,133)]">{e?.product_name}</p>
          {Array(Math.floor(e.product_rating / e.product_users_rating))
            .fill()
            .map((_, i) => (
              <StarIcon className="h-3 inline-block text-yellow-500" />
            ))}
          {`(${e ? e.product_users_rating : ""})`}
          <h5>
            <sup>JOD</sup>
            <strong>{e?.product_price}</strong>
          </h5>
        </div>
      </SwiperSlide>
    );
  });

  for (
    let i = 0;
    i < item[0]?.product_rating / item[0]?.product_users_rating;
    i++
  ) {
    stars.push(
      <span>
        <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
      </span>
    );
  }

  return (
    <div className="bg-white outline outline-[43px] outline-white">
      <div className="mx-5 my-10 bg-white">
        <div className="md:grid md:gap-10 md:grid-cols-3">
          <div className="flex">
            <div>
              <img
                className="object-contain"
                width={50}
                height={50}
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
              <img
                className="object-contain"
                width={50}
                height={50}
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
              <img
                className="object-contain"
                width={50}
                height={50}
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
            </div>
            <img
              className="flex-1 object-contain"
              width={50}
              height={50}
              src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
              alt="item"
            />
          </div>
          <div className="mt-5 md:mt-0">
            <h1 className="text-[16px] font-semibold">
              {item[0]?.product_name}
            </h1>
            <p className="text-[rgb(0,113,133)]">
              {item[0]?.product_description}
            </p>
            {stars}
            {`(${item[0] ? item[0].product_users_rating : ""})`}
          </div>
          <aside className="border-2 mt-5 md:mt-0 rounded-xl p-5 border-radius-2 bg-white border-neutral-400">
            <p className="text-red-600">
              <sup>JOD</sup> {item[0]?.product_price}
            </p>
            <p className="text-green-600">In Stock.</p>
            <select className="" name="" id="">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
            </select>
            <br />
            <button className="button w-full rounded-2xl">Add to Cart</button>
            <button className="button w-full rounded-2xl">Buy Now</button>
            <p className="text-sm text-gray-500">Ships from Amazon.com</p>
          </aside>
        </div>
        <hr className="m-10" />
        <h3 className="text-[40px] text-red-600">Top rated from our brands</h3>
        <Swiper
          style={{ marginBottom: "70px" }}
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper cursor-pointer"
        >
          {sliders}
        </Swiper>
        <hr className="m-10" />
        <h3 className="text-[40px] text-red-600 mb-5">Customer reviews</h3>
        <div className="w-[80%] m-auto">
          <div>
            <h3 className="text-xl font-bold">Add your review</h3>
            <CKEditor data="<p>Hello from CKEditor 4!</p>" />
            <button className="button mt-4">Add Review</button>
          </div>
          <div>
            <div className="flex items-center mt-20">
              <img
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                alt=""
                width={50}
                height={50}
              />
              <p>Haitham Assoli</p>
            </div>
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <strong> Its pretty and clean looking</strong>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deleniti, magnam?
            </p>
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div>
            <div className="flex items-center mt-20">
              <img
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                alt=""
                width={50}
                height={50}
              />
              <p>Haitham Assoli</p>
            </div>
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <strong> Its pretty and clean looking</strong>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deleniti, magnam?
            </p>
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
