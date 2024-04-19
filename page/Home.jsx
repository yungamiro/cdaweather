import { styles } from "./home.style";
import { MeteoAPI } from "../api/meteo";
import { Text, View } from "react-native";
import { Txt } from "../components/text/Txt";
import { MeteoBasic } from "../components/basic/MeteoBasic";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useState, useEffect } from "react";
import { getWeatherInterpreation } from "../components/service/meteo-services";

export function Home() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const currentWeather = weather?.current_weather;

  useEffect(() => {
    getUsercoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
    }
  }, [coords]);

  async function getUsercoords() {
    try {
      let { status } = await requestForegroundPermissionsAsync();
      if (status === "granted") {
        const location = await getCurrentPositionAsync();
        setCoords({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      } else {
        console.error("Location permission denied");
      }
    } catch (error) {
      console.error("Failed to get location", error);
    }
  }

  async function fetchWeather(coordinates) {
    try {
      const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(
        coordinates
      );
      setWeather(weatherResponse);
      console.log(weatherResponse);
    } catch (error) {
      console.error("Failed to fetch weather", error);
    }
  }
  return (
    currentWeather ? 
    <>
      <View style={styles.meteo_basic}>
        <MeteoBasic temperature={Math.round?.(currentWeather?.temperature)}
        city="Paris"
        interpreation={getWeatherInterpreation(currentWeather.weathercode)} />
      </View>
      <View style={styles.searchbar}></View>
      <View style={styles.meteo_advanced}></View>
    </>
  : null); 
}
