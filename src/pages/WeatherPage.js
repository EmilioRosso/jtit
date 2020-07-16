import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Button,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import FlashMessage, {showMessage} from 'react-native-flash-message';

import {weatherOperations, weatherSelectors} from '../redux/weather';
import citySelectors from '../redux/city/citySelectors';
import ForecastItem from '../components/ForecastItem/ForecastItem';

export default function WeatherPage() {
  let [city, setCity] = useState('');
  const dispatch = useDispatch();
  const forecast = useSelector((store) => weatherSelectors.forecast(store));
  const weatherLoading = useSelector((store) =>
    weatherSelectors.loading(store),
  );
  const weatherError = useSelector((store) => weatherSelectors.error(store));
  const cityLoading = useSelector((store) => citySelectors.loading(store));
  const cityError = useSelector((store) => citySelectors.error(store));

  const handleSearch = () => {
    dispatch(weatherOperations.getCityForecast(city));
  };

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
      {!weatherError && !cityError && !cityLoading && !weatherLoading && (
        <>
          <View style={styles.container}>
            <Text style={styles.heading}>Search your city</Text>
            <TextInput
              style={styles.input}
              placeholder="enter your city"
              onChangeText={setCity}
            />

            <Button onPress={handleSearch} title="Search" color="#00a8ff" />
          </View>
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
        </>
      )}
      <FlashMessage position="top" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
  loader: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  heading: {
    marginBottom: 20,
  },

  input: {
    width: '60%',
    height: 40,
    paddingHorizontal: 20,
    borderColor: '#c4c4c4',
    borderStyle: 'solid',
    borderWidth: 1,
    marginVertical: 20,
  },
  list: {
    width: '100%',
  },
});
