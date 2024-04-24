import { Txt } from "../../components/text/Txt";
import { Container } from "../../components/container/Container";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./Forecast.style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ForecastList } from "../../components/ForecastList/ForecastList";
import { getWeatherInterpreation } from "../../components/service/meteo-services";
import { DAYS } from "../../components/service/date-service";
import { nowTODDMM } from "../../components/service/date-service";

export function Forecast() {
  const { params } = useRoute();
  const nav = useNavigation();

  if (!params || !params.time || !params.weathercode || !params.temperature_2m_max) {
    return <Txt>No forecast data available.</Txt>;
  }

  const backButton = (
    <TouchableOpacity style={styles.back} onPress={() => nav.goBack()}>
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View style={styles.header}>
      {backButton}
      <View style={styles.header_texts}>
        <Txt>{params.city}</Txt>
        <Txt style={styles.subtitle}>Prevision sur 7 jours</Txt>
      </View>
    </View>
  );

  const forecastItems = params.time.map((time, index) => {
    const code = params.weathercode[index];
    const image = getWeatherInterpreation(code).image;
    const date = new Date(time);
    const day = DAYS[date.getDay()];
    const temperature = params.temperature_2m_max[index];
    return (
      <ForecastList
        image={image}
        day={day}
        key={time}
        date={nowTODDMM(date)}
        temperature={temperature.toFixed(0)}
      />
    );
  });

  return (
    <Container>
      {header}
      <View style={{ marginTop: 50 }}>
        {forecastItems}
      </View>
    </Container>
  );
}
