import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, ScrollView, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Provider} from 'react-redux';

import MapPage from './src/pages/MapPage';
import WeatherPage from './src/pages/WeatherPage';
import StackNavigation from './src/pages/StackNavigation';
import store from './src/redux/store';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="MapPage"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              let iconName;
              let color;

              if (route.name === 'MapPage') {
                iconName = 'map';
                color = focused ? '#00a8ff' : '#6294ae';
              } else if (route.name === 'WeatherPage') {
                iconName = 'sun-o';
                color = focused ? '#00a8ff' : '#6294ae';
              }
              return <Icon name={iconName} size={24} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#00a8ff',
            inactiveTintColor: '#6294ae',
          }}>
          <Tab.Screen name="MapPage" component={StackNavigation} />
          <Tab.Screen
            name="WeatherPage"
            component={WeatherPage}
            options={{title: 'Weather'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
