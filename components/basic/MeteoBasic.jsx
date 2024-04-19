import { styles } from "./MeteoBasic.style";
import { View, Image, TouchableOpacity } from "react-native";
import { Txt } from "../text/Txt";
import { Clock } from "../clock/Clock";

export function MeteoBasic({ temperature, city, interpretation, onPress }) {
  return (
    <>
      <View style={styles.clock}>
        <Clock />
      </View>
      <Txt>{city}</Txt>
      <Txt style={styles.label}>{interpretation.label}</Txt>
      <View style={styles.temperature_box}>
        <TouchableOpacity onPress={onPress}>
        <Txt style={styles.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={styles.image} source={interpretation.image}/>
      </View>
    </>
  );
}
