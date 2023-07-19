import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Styles } from "../style/styles";

export default function Entry ({navigation}) {

    function onpressHandler(){
        navigation.navigate("Screen_Home")
    }

    return(
        <View style={Styles.entryBody}>
            <Image source={require("../assets/images/Suru-removebg-preview.png")} resizeMode="contain"  style={Styles.entryImage}/>
            <Text style={Styles.taskTango}>TASK TANGO</Text>
            <Pressable 
              android_ripple={{ color: 'black', radius: 50, }}
              style={Styles.entryButton} 
              onPress={onpressHandler}
            >
                <Text style={Styles.entryButtonText}>Go To</Text>
            </Pressable>
        </View>
    );
}