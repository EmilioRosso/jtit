import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MapPage from './MapPage';
import CityWeatherPage from './CityWeatherPage';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MapPage"
        component={MapPage}
        options={{
          headerShown: false,
          title: 'MainPage',
        }}
      />
      <Stack.Screen name="CityWeatherPage" component={CityWeatherPage} />
    </Stack.Navigator>
  );
}
