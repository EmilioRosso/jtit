import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';

import weatherActions from './weatherActions';

const current = createReducer(null, {
  [weatherActions.getCurrentWeatherRequest]: (_, {payload}) => null,
  [weatherActions.getCurrentWeatherSuccess]: (_, {payload}) => payload,
});

const forecast = createReducer([], {
  [weatherActions.getCityForecastRequest]: (_, {payload}) => [],
  [weatherActions.getCoordsForecastRequest]: (_, {payload}) => [],
  [weatherActions.getCityForecastSuccess]: (_, {payload}) => payload,
  [weatherActions.getCoordsForecastSuccess]: (_, {payload}) => payload,
});

const loading = createReducer(false, {
  [weatherActions.getCurrentWeatherRequest]: (_, {payload}) => true,
  [weatherActions.getCityForecastRequest]: (_, {payload}) => true,
  [weatherActions.getCoordsForecastRequest]: (_, {payload}) => true,
  [weatherActions.getCurrentWeatherSuccess]: (_, {payload}) => false,
  [weatherActions.getCityForecastSuccess]: (_, {payload}) => false,
  [weatherActions.getCoordsForecastSuccess]: (_, {payload}) => false,
  [weatherActions.getCoordsForecastError]: (_, {payload}) => false,
  [weatherActions.getCityForecastError]: (_, {payload}) => false,
  [weatherActions.getCurrentWeatherError]: (_, {payload}) => false,
});

const error = createReducer(null, {
  [weatherActions.getCoordsForecastError]: (_, {payload}) => payload,
  [weatherActions.getCityForecastError]: (_, {payload}) => payload,
  [weatherActions.getCurrentWeatherError]: (_, {payload}) => payload,
  // [weatherActions.getCityForecastSuccess]: (_, {payload}) => null,
  // [weatherActions.getCoordsForecastSuccess]: (_, {payload}) => null,
  // [weatherActions.getCurrentWeatherSuccess]: (_, {payload}) => null,
});

export default combineReducers({current, forecast, loading, error});
