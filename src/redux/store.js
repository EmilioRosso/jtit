import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import weatherReducer from './weather/weatherReducers';
import cityReducer from './city/cityReducers';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    city: cityReducer,
  },
  middleware: [...getDefaultMiddleware()],
});

export default store;
