import {createAction} from '@reduxjs/toolkit';

const getCurrentWeatherRequest = createAction(
  'weather/getCurrentWeatherRequest',
);
const getCurrentWeatherSuccess = createAction(
  'weather/getCurrentWeatherSuccess',
);
const getCurrentWeatherError = createAction('weather/getCurrentWeatherError');

const getCoordsForecastRequest = createAction(
  'weather/getCoordsForecastRequest',
);
const getCoordsForecastSuccess = createAction(
  'weather/getCoordsForecastSucess',
);
const getCoordsForecastError = createAction('weather/getCoordsForecastError');

const getCityForecastRequest = createAction('weather/getCityForecastRequest');
const getCityForecastSuccess = createAction('weather/getCityForecastSuccess');
const getCityForecastError = createAction('weather/getCityForecastError');

export default {
  getCurrentWeatherRequest,
  getCurrentWeatherSuccess,
  getCurrentWeatherError,
  getCoordsForecastRequest,
  getCoordsForecastSuccess,
  getCoordsForecastError,
  getCityForecastRequest,
  getCityForecastSuccess,
  getCityForecastError,
};
