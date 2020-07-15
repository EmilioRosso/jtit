import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, View, Text} from 'react-native';

import mapStyle from '../utils/mapStyle.json';
import {weatherOperations, weatherSelectors} from '../redux/weather';
import {getCity} from '../redux/city/cityOperations';
import {selectCity} from '../redux/city/citySelectors';

export default function MapPage({navigation}) {
  let [markerShown, setMarkerShown] = useState(false);
  let [latitude, setLatitude] = useState('');
  let [longitude, setLongitude] = useState('');
  const dispatch = useDispatch();

  const currentWeather = useSelector((store) =>
    weatherSelectors.current(store),
  );
  const currentCity = useSelector((store) => selectCity(store));

  const handleLongPress = ({nativeEvent}) => {
    const {latitude, longitude} = nativeEvent.coordinate;
    dispatch(weatherOperations.getCurrentWeather(latitude, longitude));
    dispatch(getCity(latitude, longitude));
    setLatitude(latitude);
    setLongitude(longitude);
    setMarkerShown(true);
  };

  const handleCalloutPress = (event) => {
    navigation.push('CityWeatherPage', {latitude, longitude});
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 49.8440455,
          longitude: 30.9954201,
          latitudeDelta: 3,
          longitudeDelta: 3,
        }}
        customMapStyle={mapStyle}
        onPress={() => setMarkerShown(false)}
        onLongPress={handleLongPress}>
        {markerShown && (
          <Marker
            draggable
            coordinate={{latitude, longitude}}
            onCalloutPress={handleCalloutPress}>
            <Callout style={styles.callout}>
              {currentWeather && (
                <>
                  <Text style={styles.cityText}>{currentCity}</Text>
                  <Text>Temp: {currentWeather.temp} C</Text>
                  <Text>{currentWeather.weather.description}</Text>
                </>
              )}
            </Callout>
          </Marker>
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  map: {height: '100%'},
  callout: {
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  tempText: {
    marginBottom: 6,
  },
  cityText: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
});
