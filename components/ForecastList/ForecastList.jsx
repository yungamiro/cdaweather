import { View, Image } from "react-native";
import {styles} from "./ForecastList.style"
import { Txt } from "../text/Txt";

export function ForecastList({ image, day, date, temperature }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Txt style={styles.day}>{day}</Txt>
      <Txt style={styles.date}>{date}</Txt>
      <Txt>{temperature}°</Txt>
    </View>
  );
}
