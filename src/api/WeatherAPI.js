import axios from "axios";

const API_KEY = "cf15196d3e9669248d7cbcc416f072c4";

export const fetchWeatherData = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return response.data;
};
