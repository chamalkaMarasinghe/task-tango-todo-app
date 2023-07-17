import React from "react";
import { ScrollView, Text } from "react-native";
import { View } from "react-native";
import { Styles } from "../style/styles";
import { LinearGradient } from "expo-linear-gradient";

export default function Home () {

    const arr = [1,2,3,4,5,6,7,8,9,10]
    const colors = ["red","green","orange","yellow","brown","blue","gray","purple","green","orange"]

    //function for dynamically change the left border colour
    const dynamicColors = (color, item) => {

        const dynamicStyleSheet =  {
            constainer : {
                borderLeftColor: color,
            }
        }

        return(
          <LinearGradient
            key={item}
            colors={["#f7dcb2", "#fad6a0", "white"]} 
            style={[Styles.cardLayout, dynamicStyleSheet.constainer]}
            start={{ x: 0, y: 0 }} // Horizontal start point (left)
            end={{ x: 1, y: 0 }} // Horizontal end point (right)
          >
            <Text style={Styles.cardTitle}>Title of the task</Text>
            <Text style={Styles.cardTime}>7.00 PM</Text>
          </LinearGradient>
        );
    }

    return(
        <View style={Styles.commonBody} >
            <ScrollView  contentContainerStyle={Styles.scrollviewStyle}
              showsVerticalScrollIndicator={false} // Hide vertical scrollbar
              showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
            >
            {
                arr.map((item) => {
                    return(
                        dynamicColors(colors.at(item), item)
                    );
                })
            }
            </ScrollView> 
        </View>
    )
}