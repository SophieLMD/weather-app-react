import React, { useState } from "react";
import axios from "axios";
export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "f3009e4852fa0a079dab291dabf020c4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function searchCity(event) {
    setCity(event.target.value);
  }
  function displayWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city..."
        onChange={searchCity}
      />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Description: {weather.description}</li>
          <li>Wind: {weather.wind} km/h </li>
          <li>Humidity: {weather.humidity}% </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
