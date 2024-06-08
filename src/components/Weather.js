// Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=169b6ce945ee3f09375f9069b38517f3`
        );
        setWeather(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching weather data</p>;

  return (
    <div>
      <ul>
      <h2>Weather in {weather.name}</h2>
      <li><p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p></li>
      <li><p>Weather: {weather.weather[0].description}</p></li>
      </ul>
    </div>
  );
}

export default Weather;