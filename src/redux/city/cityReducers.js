import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import cityActions from './cityActions';

const city = createReducer('', {
  [cityActions.getCitySuccess]: (_, {payload}) => payload,
});

const error = createReducer(null, {
  [cityActions.getCityError]: (_, {payload}) => payload,
  [cityActions.getCitySuccess]: (_, {payload}) => null,
});

export default combineReducers({city, error});
