import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Button,
  TextInput,
} from 'react-native';

import {weatherOperations, weatherSelectors} from '../redux/weather';
import ForecastItem from '../components/ForecastItem/ForecastItem';

export default function WeatherPage() {
  let [city, setCity] = useState('');
  const dispatch = useDispatch();
  const forecast = useSelector((store) => weatherSelectors.forecast(store));

  const handleSearch = () => {
    dispatch(weatherOperations.getCityForecast(city));
  };

  return (
    <View style={styles.wrapper}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
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
