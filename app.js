require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.API_KEY;
const CITY_NAME = 'Bangalore';

const fetchWeather = async () => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error.response.data);
        throw error;
    }
};

fetchWeather()
    .then(data => {
        console.log(`Weather in ${CITY_NAME}:`);
        console.log(`Description: ${data.weather[0].description}`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Humidity: ${data.main.humidity}%`);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
