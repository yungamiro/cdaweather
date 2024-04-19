import { Home } from "./page/home/Home";
import { useFonts } from "expo-font";
import AlataRegular from "./assets/font/Alata-Regular.ttf";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Forecast } from "./page/forecast/Forecast";

export default function App() {
  const [isFontLoaded] = useFonts({ "Alata-Regular": AlataRegular });
  const Stack = createNativeStackNavigator();
  const navTheme = {
    colors: {
      background: "transparent",
    },
  };
  return (
    <NavigationContainer theme={navTheme}>
      {isFontLoaded ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="home" component={Home}></Stack.Screen>
          <Stack.Screen name="Forecast" component={Forecast}></Stack.Screen>
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}
