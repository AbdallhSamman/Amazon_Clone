import React, {useState} from "react";
import "./Videos.css";


function Videos() {
    const [video, setVideo] = useState();
    const fetchData = ()=>{
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=amazon%20news&type=video&key=AIzaSyC_J5jmpeFttBAamxLKvmwzW5L8jHZaOak`)
        .then(result=>result.json())
        .then(data=>{
            // return JSON.parse(data.items.snnipts);
        })
    }
  return (
    <div className="videos">
      <div className="videos__container">
        <h1 className="videos__title">Amazon Related Videos</h1>
        <ul>
            {/* {fetchData().forEach(element => {
             <li>{element.title}</li>
            })} */}
        </ul>
        <div className="videos__allVideos">
            <div className="videos__singleVideo">
                <h4 className="videos__videoTitle"></h4>
                <button onClick={fetchData}>click me</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
