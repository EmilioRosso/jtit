import axios from 'axios';

export const GOOGLE_KEY = 'AIzaSyDavlIRU5m2FJjO8aMBdbzfSpasRvbxrSU';

export const fetchCity = (latitude, longitude) =>
  axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_KEY}`,
  );
