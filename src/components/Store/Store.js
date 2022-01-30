import { StarIcon } from "@heroicons/react/solid";
import React from "react";
// import "swiper/css/bundle";
// import "./Store.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
function Store() {
  return (
    <div className="bg-white">
      <div className="mx-5 my-10 bg-white">
        <div className="md:grid md:gap-10 md:grid-cols-3">
          <div className="flex">
            <div>
              <img
                className=""
                width={50}
                height={50}
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
              <img
                className=""
                width={50}
                height={50}
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
              <img
                className=""
                width={50}
                height={50}
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
            </div>
            <img
              className="flex-1"
              width={50}
              height={50}
              src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
              alt="item"
            />
          </div>
          <div className="mt-5 md:mt-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
              voluptatibus adipisci nesciunt aspernatur repellat eaque error
              aliquid facere ratione, iure ipsum pariatur temporibus sed quod,
              quae harum soluta numquam fugit.
            </p>
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
            <StarIcon className="h-5 w-5 text-yellow-400 inline-block" />
          </div>
          <aside className="border-2 mt-5 md:mt-0 rounded-xl p-5 border-radius-2 bg-white border-neutral-400">
            <p className="text-red-600">$99.12</p>
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
        <h3 className="text-xl text-red-600">Top rated from our brands</h3>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          fadeDuration={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide style={{ opacity: "1" }}>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
              <p className="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                inventore nulla ea mollitia atque cumque consequuntur alias
                blanditiis aliquam temporibus nobis, vel est ex cupiditate,
                magnam corrupti, debitis sunt nostrum!
              </p>
              <sup>$</sup>500
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                inventore nulla ea mollitia atque cumque consequuntur alias
                blanditiis aliquam temporibus nobis, vel est ex cupiditate,
                magnam corrupti, debitis sunt nostrum!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                inventore nulla ea mollitia atque cumque consequuntur alias
                blanditiis aliquam temporibus nobis, vel est ex cupiditate,
                magnam corrupti, debitis sunt nostrum!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
              <p className="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                inventore nulla ea mollitia atque cumque consequuntur alias
                blanditiis aliquam temporibus nobis, vel est ex cupiditate,
                magnam corrupti, debitis sunt nostrum!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                inventore nulla ea mollitia atque cumque consequuntur alias
                blanditiis aliquam temporibus nobis, vel est ex cupiditate,
                magnam corrupti, debitis sunt nostrum!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                inventore nulla ea mollitia atque cumque consequuntur alias
                blanditiis aliquam temporibus nobis, vel est ex cupiditate,
                magnam corrupti, debitis sunt nostrum!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
              <p className="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                inventore nulla ea mollitia atque cumque consequuntur alias
                blanditiis aliquam temporibus nobis, vel est ex cupiditate,
                magnam corrupti, debitis sunt nostrum!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/71DMWqowTxS._AC_SL1000_.jpg"
                alt="item"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                inventore nulla ea mollitia atque cumque consequuntur alias
                blanditiis aliquam temporibus nobis, vel est ex cupiditate,
                magnam corrupti, debitis sunt nostrum!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <h3>hiiiiiiiiiiiiiiiiiiiiiiiii</h3>
      </div>
    </div>
  );
}

export default Store;
