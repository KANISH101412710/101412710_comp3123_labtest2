import React from "react";

const WeatherDisplay = ({ data }) => {
  return (
    <div className="weather-display">
      <h2>{data.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />
      <p>{data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
