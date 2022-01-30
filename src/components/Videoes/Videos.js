import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "./Videos.css";

function Videos() {
  const [videos, setVideos] = useState(null);

//   useEffect(() => {
//     fetch(
//       "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=amazon%20news&type=video&key=AIzaSyCEmjT-G4dPIcb3gGksj4WSgsD-3MCxgcE"
//     )
//       .then((result) => result.json())
//       .then((data) => {
//         setVideos(data.items);
//         console.log(data.items);
//       });
//   }, []);
  return (
    <div className="videos">
      <div className="videos__container">
        <h1 className="videos__title">Amazon Related Videos</h1>
        <div className="videos__allVideos">
          <div className="videos__singleVideo">
            <h2>I am a video</h2>
            {videos &&
              (videos.length === 0 ? (
                <p>No results</p>
              ) : (
                <ul className="videos__items">
                  {videos.map((item) => (
                    <li className="item" key={item.id}>
                      <div>
                        <b>{item.snippet.title}</b>
                        <iframe
                          width="350"
                          height="315"
                          src={`https://www.youtube.com/embed/${item.id.videoId}`}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </li>
                  ))}
                </ul>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
