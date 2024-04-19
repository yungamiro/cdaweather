import { styles } from "./MeteoBasic.style";
import { View, Image } from "react-native";
import { Txt } from "../text/Txt";
import { Clock } from "../clock/Clock";

export function MeteoBasic({ temperature, city, interpration }) {
  return (
    <>
      <View style={styles.clock}>
        <Clock />
      </View>
      <Txt>{city}</Txt>
      <Txt style={styles.label}>{interpration}</Txt>
      <View style={styles.temperature_box}>
        <Txt style={styles.temperature}>{temperature}°</Txt>
        <Image style={styles.image} />
      </View>
    </>
  );
}
