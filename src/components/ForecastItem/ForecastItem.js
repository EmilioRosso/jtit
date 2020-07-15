import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Text,
  Image,
  Button,
  TextInput,
} from 'react-native';

export default function ForecastItem({datetime, temp, weather}) {
  return (
    <View style={styles.wrapper}>
      <Text>{datetime.slice(5)}</Text>
      <View style={styles.container}>
        <Text>{weather.description}</Text>
        <Text>Temperature: {temp} C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#dcdcdc',
    borderRadius: 4,
    marginBottom: 12,
    borderRadius: 6,
    padding: 14,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 10,
  },
});
