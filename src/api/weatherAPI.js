import axios from 'axios';
const WEATHERSTACK_KEY = 'fa2218fe35d347a5a1dbf9b04a23b600';

axios.defaults.baseURL = 'http://api.weatherbit.io/v2.0';

const fetchCurrentWeather = (latitude, longitude) =>
  axios.get(
    `/current?key=${WEATHERSTACK_KEY}&lat=${latitude}&lon=${longitude}`,
  );

const fetchCurrentWeatherInCity = (city) =>
  axios.get(`/current?key=${WEATHERSTACK_KEY}&city=${city}`);

const fetchCoordsForecast = (latitude, longitude) =>
  axios.get(
    `/forecast/daily?key=${WEATHERSTACK_KEY}&lat=${latitude}&lon=${longitude}&days=7`,
  );

const fetchCityWeatherForecast = (city) =>
  axios.get(`/forecast/daily?key=${WEATHERSTACK_KEY}&city=${city}&days=7`);

export default {
  fetchCurrentWeather,
  fetchCurrentWeatherInCity,
  fetchCoordsForecast,
  fetchCityWeatherForecast,
};
