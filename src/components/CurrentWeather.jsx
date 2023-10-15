import React from 'react';
import {
  View, Text, SafeAreaView, StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';




function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.text}>Current weather</Text>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>

        <View style={styles.HighLowWrapper}>
          <Text style={styles.HighLow}>High:8 </Text>
          <Text style={styles.HighLow}>Low:6 </Text>
        </View>

      </View>

        <View style={styles.bodywrapper}>
          <Text style={styles.description}>It's sunny</Text>
          <Text style={styles.message}>Its perfect T-shirt weather</Text>
        </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color: 'white'
  },
  temp:{
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  HighLow: {
    color: 'black',
    fontSize: 20
  },
  HighLowWrapper:{
    flexDirection: 'row',
    gap: 9,
  },
  bodywrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 50
  },
  description:{
   fontSize: 48
  },
  message:{
    fontSize: 30
  }
  
});
export default CurrentWeather;
