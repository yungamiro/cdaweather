import axios from "axios";

export class MeteoAPI {
  static async fetchWeatherFromCoords(coords) {
    if (!coords || !coords.lat || !coords.lng) {
      throw new Error("Invalid coordinates provided");
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      // Handle network errors or API failures
      throw new Error("Failed to fetch weather data");
    }
  }

  static async fetchCityFromCoords(coords) {
    if (!coords || !coords.lat || !coords.lng) {
      throw new Error("Invalid coordinates provided");
    }

    const reverseGeocodingUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`;

    try {
      const response = await axios.get(reverseGeocodingUrl);
      const {
        address: { city, village, town },
      } = response.data;
      return city || village || town;
    } catch (error) {
      // Handle network errors or API failures
      throw new Error("Failed to fetch city data");
    }
  }
}
