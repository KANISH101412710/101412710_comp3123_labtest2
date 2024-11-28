import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "./api/WeatherAPI";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import DateTimeDisplay from "./components/DateTimeDisplay";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("Toronto");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(city);
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError("City not found. Please try again.");
      }
    };
    fetchData();
  }, [city]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      <div className="box-container">
        {weatherData && <WeatherDisplay data={weatherData} />}
        <DateTimeDisplay />
      </div>
    </div>
  );
};

export default App;
