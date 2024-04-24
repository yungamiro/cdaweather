import { Text, useWindowDimensions } from "react-native";
import { styles } from "./Txt.style";

export function Txt({ children, style }) {
  const {height} = useWindowDimensions();
  const fontSize = style?.fontSize || styles.text.fontSize
  const echelle = 1/height
  return <Text style={[styles.text, style, {fontSize: fontSize * echelle * height}]}>{children}</Text>;
}
