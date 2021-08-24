import React from 'react';
import {View, Text, StyleSheet, StatusBar, Linking} from "react-native";
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


const weatherOptions = {
  Thunderstorm: {
    iconName: "thunderstorm",
    gradient: ["#403B4A", "#E7E9BB"],
    title: "Thunderstorm outside",
    subtitle: "God of Thunder is comming...",
    music : "FT아일랜드 - 천둥"
  },
  Drizzle: {
    iconName: "water",
    gradient: ["#4286f4", "#373B44"],
    title: "Drizzle",
    subtitle: "불쾌지수 상승 angle :(",
    music : "Green Da - Last Night On Earth"
  },
  Rain: {
    iconName: "rainy-sharp",
    gradient: ["#2980b9", "#2c3e50"],
    title: "Mother pumkin Rainy!",
    subtitle: "산성비 맞으면 대머리ㅋㅋ",
    music : "헤이즈 - 비도오고 그래서(feat.신용재)"
  },
  Snow: {
    iconName: "snow",
    gradient: ["#E6DADA", "#274046"],
    title: "Snowy like X-mas!",
    subtitle: "Actually there's no Santa..",
    music : "Mariah Carey - All I Want for Christmas Is You"
  },
  Atmosphere: {
    iconName: "cloud",
    gradient: ["#667db6", "#0082c8"],
    music : "지코 - 아무노래"
  },
  Clear: {
    iconName: "sunny",
    gradient: ["#ffff1c", "#00c3ff"],
    title: "Sunny",
    subtitle: "Go get your sunblock ",
    music : "SOLE - RIDE(Feat.THAMA)"
  },
  Clouds: {
    iconName: "ios-cloudy-night-sharp",
    gradient: ["#525252", "#3d72b4"],
    title: "Clouds",
    subtitle: "아무것도 하기싫어;",
    music : "로띠안 - 구름(Freat.예빚)"
  },
  Mist: {
    iconName: "water",
    gradient: ["#616161", "#9bc5c3"],
    title: "Mist!",
    subtitle: "It seems like Mystery",
    music : "Beast - Mystery"
  },
  Dust: {
    iconName: "alert-sharp",
    gradient: ["#e9d362", "#333333"],
    title: "Dusty",
    subtitle: "Thanks a lot China 🖕🏻",
    music : "김광석 - 먼지가 되어"
  },
  Haze: {
    iconName: "cloudy-outline",
    gradient: ["#304352", "#d7d2cc"],
    title: "Haze",
    subtitle: "여보안경안보여",
    music : "브라운 아이드 소울 - 그대의 밤, 나의 아침"
  }
};

export default function Weather({temp, condition, name}){
  return(
      <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
      <Ionicons
        name={weatherOptions[condition].iconName}
        size={80}
        color="white"
      />
      <Text style={styles.temp}>{temp} ℃</Text>
      <Text style={styles.city}>You're now in {name}</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}> : {weatherOptions[condition].subtitle}</Text>
        <Text style={styles.musicSuggest}>날씨랑 어울리는 추천곡</Text>
        <Text style={styles.music}> : {weatherOptions[condition].music}</Text>
        <Text style={styles.musicGo} onPress={() =>  Linking.openURL(`https://www.google.com/search?q=${weatherOptions[condition].music}`)}>들으러 가기</Text>
      </View>
      </LinearGradient>
  )
}

Weather.propTypes = {
  temp : PropTypes.number.isRequired,
  condition : PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Dust",
    "Haze"
  ]).isRequired
}

const styles = StyleSheet.create({
  
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },
  temp : {
    fontSize :30,
    marginTop:10,
    color : "white"
  },
  halfContainer : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },
  title:{
    color : "white",
    fontSize:35
  },
  subtitle:{
    color : "white",
    fontSize:20
  },
  textContainer:{
    paddingHorizontal : 20,
    alignItems : "flex-start",
    marginTop :20,
    marginBottom :20
  },
  musicSuggest: {
    marginTop : 20,
    color : "white",
    fontSize : 20,
    justifyContent : "center",
    alignItems : "center",
    alignItems : "flex-start"
  },
  music : {
    paddingBottom : 20,
    color : "white",
    fontSize : 20,
    justifyContent : "center",
    alignItems : "center",
    alignItems : "flex-start"
  },
  city : {
    color : "white",
    fontSize : 15,
    marginBottom : 15,
    marginTop : 5
  },
  musicGo:{
    margin :0,
    color : "gray",
    textDecorationLine : 'underline'
  }
})