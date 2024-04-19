import { styles } from "./home.style";
import { MeteoAPI } from "../../api/meteo";
import { Text, View } from "react-native";
import { Txt } from "../../components/text/Txt";
import { MeteoBasic } from "../../components/basic/MeteoBasic";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useState, useEffect } from "react";
import { getWeatherInterpreation } from "../../components/service/meteo-services";
import { MeteoAdvanced } from "../../components/advanced/MeteoAdvanced";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/container/Container";

export function Home() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const currentWeather = weather?.current_weather;

  useEffect(() => {
    getUsercoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
      fethCity(coords);
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
    } catch (error) {
      console.error("Failed to fetch weather", error);
    }
  }

  async function fethCity(coordinates) {
    const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates);
    setCity(cityResponse);
  }

  const nav = useNavigation();

  function navToForecast() {
    nav.navigate("Forecast")
  }

  return (currentWeather ? 
    <Container>
      <View style={styles.meteo_basic}>
        <MeteoBasic
          temperature={Math.round?.(currentWeather?.temperature)}
          city={city}
          interpretation={getWeatherInterpreation(currentWeather.weathercode)}
          onPress={navToForecast}
        />
      </View>
      <View style={styles.searchbar}></View>
      <View style={styles.meteo_advanced}>
        <MeteoAdvanced
          wind={currentWeather.windspeed}
          dusk={weather.daily.sunrise[0].split("T")[1]}
          dawn={weather.daily.sunset[0].split("T")[1]}
        />
      </View>
    </Container>
   : null)
}
