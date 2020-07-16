import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import cityActions from './cityActions';

const city = createReducer('', {
  [cityActions.getCitySuccess]: (_, {payload}) => payload,
});

const loading = createReducer(false, {
  [cityActions.getCityRequest]: (_, {payload}) => true,
  [cityActions.getCitySuccess]: (_, {payload}) => false,
  [cityActions.getCityError]: (_, {payload}) => false,
});

const error = createReducer(null, {
  [cityActions.getCityError]: (_, {payload}) => payload,
  [cityActions.getCitySuccess]: (_, {payload}) => null,
});

export default combineReducers({city, loading, error});
