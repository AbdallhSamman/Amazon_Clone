import React, { useState, useEffect } from "react";
import "./Weather.css";

function Weather() {
  const [weather, setWeather] = useState();
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=amman&appid=89b3233b490deb8f28d3a52dada58cfe"
    )
      .then((result) => result.json())
      .then((data) => {
        setWeather(data);
        console.log(weather);
      });
  }, []);

  const dateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="weather">
      <main>
      <div className="weather__locationInfo">
          <div className="weather__location">{weather.name}, {weather.sys?.country}</div>
          <div className="weather__date">{dateBuilder(new Date())}</div>
          <div className="weather_mainBox">
              <div className="weather__temp">{Math.round(weather.main.temp - 273.15)}°c</div>
              <div className="weather__desc">{weather.weather[0].description}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Weather;
