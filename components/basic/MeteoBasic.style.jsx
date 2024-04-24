import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    clock:{
        alignItems:"flex-end",
    },
    label:{
        alignSelf:"flex-end",
        marginRight:13,
        fontSize:20,
    },
    image:{
        height:90,
        width:90,
    },
    temperature_box:{
        alignItems:"baseline",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    temperature:{
        fontSize:100,
    }
})