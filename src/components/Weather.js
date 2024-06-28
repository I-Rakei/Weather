import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather({ city, onDelete }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weatherStatus, setWeatherStatus] = useState(null);
  const [deletionMessage, setDeletionMessage] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `your key`,
          {
            headers: {
              'Content-Type': 'application/json',
              // Add any other headers you need for the GET request
            },
          }
        );
        setWeather(response.data);
        // Check for custom header and update weather status
        const customHeader = response.headers['weather-status'];
        if (customHeader) {
          setWeatherStatus(customHeader);
        }
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

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=169b6ce945ee3f09375f9069b38517f3`,
        {
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers you need for the DELETE request
          },
        }
      );
      setWeather(null); // Clear weather data
      setDeletionMessage('Data deleted successfully');
      onDelete(); // Callback to parent component to handle deletion
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(weather, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = 'weather_data.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  if (loading) {
    return <p>Loading...</p>;
  } else if (error && !deletionMessage) {
    return <p>Foi apagado os dados</p>;
  } else if (deletionMessage) {
    return <p>{deletionMessage}</p>;
  } else {
    return (
      <div>
        {weather && (
          <ul>
            <h2>Weather in {weather.name}</h2>
            <li><p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p></li>
            <li><p>Weather: {weather.weather[0].description}</p></li>
          </ul>
        )}
        {weatherStatus && (
          <div>
            <p>Weather status: {weatherStatus}</p>
          </div>
        )}
        <button className='btn btn-danger' onClick={handleDelete}>Delete</button> 
        <br/>
        <br/>
        {weather && (
          <button className='btn btn-success' onClick={handleExportJSON}>Export to JSON</button>
        )}
      </div>
    );
  }
}

export default Weather;
