import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Weather.module.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York');

  const API_KEY = 'YOUR_API_KEY';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(API_URL);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, [API_URL]);

  return (
    <div className={styles.container}>
      <h2>Weather</h2>
      {weatherData ? (
        <div className={styles.weatherInfo}>
          <div>
            <strong>City:</strong> {weatherData.name}
          </div>
          <div>
            <strong>Temperature:</strong> {weatherData.main.temp}°C
          </div>
          <div>
            <strong>Weather:</strong> {weatherData.weather[0].main}
          </div>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather;
