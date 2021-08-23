import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
  return <View style={styles.container}>
    <Text style={styles.text}>Getting the Weather</Text>
    <StatusBar barStyle="light-content" />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "flex-end",
    paddingHorizontal : 30,
    paddingVertical :100,
    backgroundColor : "#FDF6AA"
  },
  text : {
    color : "grey",
    fontSize : 35
  }

})