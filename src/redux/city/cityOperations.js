import cityActions from './cityActions';
import {fetchCity} from '../../api/geocodingAPI';
import Geocoder from 'react-native-geocoding';
Geocoder.init('AIzaSyDavlIRU5m2FJjO8aMBdbzfSpasRvbxrSU');

export const getCity = (latitude, longitude) => (dispatch) => {
  dispatch(cityActions.getCityRequest());

  Geocoder.from(latitude, longitude)
    .then((json) => {
      const city = json.results[0].address_components.find(
        (adress) => adress.types[0] === 'locality',
      ).long_name;
      console.log(city);
      dispatch(cityActions.getCitySuccess(city || 'Unknown'));
    })
    .catch((error) => dispatch(cityActions.getCityError(error.message)));
};
