import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./page/Home";
import { styles } from "./App.style";
import fond from "./assets/fond.jpg";
import { useFonts } from "expo-font";
import AlataRegular from "./assets/font/Alata-Regular.ttf"

export default function App() {
  const [isFontLoaded] = useFonts({ "Alata-Regular": AlataRegular });
  console.log("font",isFontLoaded);
  return (
    <ImageBackground
      source={fond}
      style={styles.img_background}
      imageStyle={styles.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {isFontLoaded ? <Home /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
