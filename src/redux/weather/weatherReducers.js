import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';

import weatherActions from './weatherActions';

const current = createReducer(null, {
  [weatherActions.getCurrentWeatherSuccess]: (_, {payload}) => payload,
});

const forecast = createReducer([], {
  [weatherActions.getCityForecastSuccess]: (_, {payload}) => [...payload],
  [weatherActions.getCoordsForecastSuccess]: (_, {payload}) => [...payload],
});

const error = createReducer(null, {
  [weatherActions.getCoordsForecastError]: (_, {payload}) => payload,
  [weatherActions.getCityForecastError]: (_, {payload}) => payload,
  [weatherActions.getCurrentWeatherError]: (_, {payload}) => payload,
  [weatherActions.getCityForecastSuccess]: (_, {payload}) => null,
  [weatherActions.getCoordsForecastSuccess]: (_, {payload}) => null,
  [weatherActions.getCurrentWeatherSuccess]: (_, {payload}) => null,
});

export default combineReducers({current, forecast, error});
