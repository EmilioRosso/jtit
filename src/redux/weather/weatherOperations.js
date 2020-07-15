import weatherActions from './weatherActions';
import weatherAPI from '../../api/weatherAPI';

const getCurrentWeather = (lat, long) => (dispatch) => {
  dispatch(weatherActions.getCurrentWeatherRequest());
  weatherAPI
    .fetchCurrentWeather(lat, long)
    .then((response) => {
      dispatch(weatherActions.getCurrentWeatherSuccess(response.data.data[0]));
    })
    .catch((error) =>
      dispatch(weatherActions.getCurrentWeatherError(error.error)),
    );
};

const getCoordsForecast = (latitude, longitude) => (dispatch) => {
  dispatch(weatherActions.getCoordsForecastRequest());
  weatherAPI
    .fetchCoordsForecast(latitude, longitude)
    .then((response) =>
      dispatch(weatherActions.getCoordsForecastSuccess(response.data.data)),
    )
    .catch((error) =>
      dispatch(weatherActions.getCoordsForecastError(error.error)),
    );
};

const getCityForecast = (city) => (dispatch) => {
  dispatch(weatherActions.getCityForecastRequest());
  weatherAPI
    .fetchCityWeatherForecast(city)
    .then((response) =>
      dispatch(weatherActions.getCityForecastSuccess(response.data.data)),
    )
    .catch((error) => {
      weatherActions.getCityForecastError(error.error);
    });
};

export default {
  getCurrentWeather,
  getCoordsForecast,
  getCityForecast,
};
