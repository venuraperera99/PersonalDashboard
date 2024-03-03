import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Weather.module.css';

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState('Toronto');
  const cityOptions = [
    'Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 
    'Ottawa', 'Winnipeg', 'Quebec', 'Hamilton', 'Halifax',
    'Mississauga', 'Brampton', 'Markham', 'Vaughan', 'Kitchener',
    'London', 'Windsor', 'Oshawa', 'Barrie', 'Waterloo'
  ];
  const API_KEY = '120081ecba5d741c73a66035826ba544';
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(weatherURL);
        setCurrentWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeatherData();
  }, [weatherURL, selectedCity]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  if (!currentWeather) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.location}>Weather in {selectedCity}, {currentWeather.sys.country}</div>
      <div className={styles.temperature}>{Math.round(currentWeather.main.temp)}°C</div>
      <div className={styles.weatherDescription}>{currentWeather.weather[0].description}</div>
      <img
        src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
        alt={currentWeather.weather[0].description}
        className={styles.weatherIcon}
      />
      <div className={styles.cityDropdown}>
        <select value={selectedCity} onChange={handleCityChange}>
          {cityOptions.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Weather;
