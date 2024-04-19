import { ImageBackground } from "react-native";
import { styles } from "./Container.style";
import fond from "../../assets/fond.jpg";
import { SafeAreaView } from "react-native-safe-area-context";

export function Container({ children }) {
  return (
    <ImageBackground
      source={fond}
      style={styles.img_background}
      imageStyle={styles.img}
    >
      <SafeAreaView style={styles.container}> {children}</SafeAreaView>
    </ImageBackground>
  );
}
