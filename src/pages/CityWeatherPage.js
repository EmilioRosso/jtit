import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import FlashMessage, {showMessage} from 'react-native-flash-message';

import {weatherOperations, weatherSelectors} from '../redux/weather';
import ForecastItem from '../components/ForecastItem/ForecastItem';
import citySelectors from '../redux/city/citySelectors';

export default function CityWeatherPage({route}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const {latitude, longitude, currentCity} = route.params;
    console.log(latitude, longitude);
    dispatch(weatherOperations.getCoordsForecast(latitude, longitude));
  }, []);

  const forecast = useSelector((store) => weatherSelectors.forecast(store));
  // const currentCity = useSelector((store) => citySelectors.selectCity(store));
  const weatherLoading = useSelector((store) =>
    weatherSelectors.loading(store),
  );
  const weatherError = useSelector((store) => weatherSelectors.error(store));
  const cityLoading = useSelector((store) => citySelectors.loading(store));
  const cityError = useSelector((store) => citySelectors.error(store));

  useEffect(() => {
    if (weatherError || cityError) {
      showMessage({
        message: 'There is an error with request to server',
        type: 'danger',
      });
    }
  }, [weatherError, cityError]);

  return (
    <View style={styles.wrapper}>
      {weatherLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      <Text style={styles.heading}>{route.params.currentCity}</Text>
      <View style={styles.container}>
        {forecast.length !== 0 && (
          <FlatList
            contentContainerStyle={styles.list}
            data={forecast}
            renderItem={({item}) => (
              <ForecastItem
                datetime={item.datetime}
                temp={item.temp}
                weather={item.weather}
              />
            )}
            keyExtractor={(item) => item.datetime}
          />
        )}
      </View>
      <FlashMessage position="top" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
  loader: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20,
    marginBottom: 20,
  },
  list: {
    width: '100%',
  },
});
