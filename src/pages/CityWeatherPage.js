import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {weatherOperations, weatherSelectors} from '../redux/weather';
import ForecastItem from '../components/ForecastItem/ForecastItem';
import {selectCity} from '../redux/city/citySelectors';

export default function CityWeatherPage({latitude, longitude}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherOperations.getCoordsForecast(latitude, longitude));
  }, []);

  const forecast = useSelector((store) => weatherSelectors.forecast(store));
  const currentCity = useSelector((store) => selectCity(store));

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>{currentCity}</Text>
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
