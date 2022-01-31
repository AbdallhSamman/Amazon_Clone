import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Videos.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";

function Videos() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=amazon%20news&type=video&key=AIzaSyCn54O9Ervufd1JbkUToX39sUb79K6b8OI"
    )
      .then((result) => result.json())
      .then((data) => {
        setVideos(data.items);
        console.log(data.items);
      });
  }, []);
  return (
    <div className="videos">
      <div className="videos__container">
        <h1 className="videos__title">Amazon Related Videos</h1>
        {videos &&
          (videos.length === 0 ? (
            <p>No results</p>
          ) : (
            <ul className="videos__items">
               <Swiper navigation={true} className="mySwiper">
          {videos.map((item) => (
          <SwiperSlide>
                <li className="videos__singleVideo" key={item.id}>
                 <div>
                 <iframe
                    // width="220"
                    // height="220"
                    src={`https://www.youtube.com/embed/${item.id.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {/* <p className="videos__title">{item.snippet.title}</p> */}
                 </div>
                </li>
          </SwiperSlide>
              ))}
          </Swiper>
              
            </ul>
          ))}
      </div>
    </div>
  );
}

export default Videos;
