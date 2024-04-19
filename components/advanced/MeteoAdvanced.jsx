import { Styles } from "./MeteoAdvanced.style";
import { Txt } from "../text/Txt";
import { View } from "react-native";

export function MeteoAdvanced({ dusk, dawn, wind }) {
  return (
    <View style={Styles.container}>
      <View style={{ alignItems: "center" }}>
        <Txt style={{fontSize:25}}>{dusk}</Txt>
        <Txt style={{fontSize:20}}>Aube</Txt>
      </View>
      <View style={{ alignItems: "center" }}>
        <Txt style={{fontSize:25}}>{dawn}</Txt>
        <Txt style={{fontSize:20}}>Crepuscule</Txt>
      </View>
      <View style={{ alignItems: "center" }}>
        <Txt style={{fontSize:25}}>{wind}</Txt>
        <Txt style={{fontSize:20}}>Vent</Txt>
      </View>
    </View>
  );
}
