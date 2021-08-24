import { StatusBar } from 'expo-status-bar';
import {Alert} from "react-native";
import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "b0b4eef576540568d126dff231645d2b";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {data:
      {main: 
        {temp},
        weather,
        name
      }
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      // console.log(weather)
      this.setState({
        isLoading: false,
        condition : weather[0].main,
        temp,
        name
      });
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync()
      this.getWeather(latitude,longitude)
    }
    catch (error) {
      Alert.alert("Can't find you.","So sad...")
    }
  }
  componentDidMount() {
    this.getLocation()
  }
  render() {
    const {isLoading, temp, condition, name} = this.state;
    return(
      isLoading ? <Loading /> : <Weather temp={Math.round(temp*10)/10} condition = {condition} name={name}/>
    )
  }
}