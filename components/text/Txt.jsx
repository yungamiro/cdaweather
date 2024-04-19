import { Text } from "react-native";
import { styles } from "./Txt.style";

export function Txt({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
