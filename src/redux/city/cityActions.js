import {createAction} from '@reduxjs/toolkit';

const getCityRequest = createAction('city/getCityRequest');
const getCitySuccess = createAction('city/getCitySuccess');
const getCityError = createAction('city/getCityError');

export default {getCityRequest, getCitySuccess, getCityError};
