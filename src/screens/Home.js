import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Styles } from "../style/styles";
import * as SQLite from 'expo-sqlite';

export default function Home ({navigation}) {

    const db = SQLite.openDatabase('tasktango.db');
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const colors = ["red","green","orange","yellow","brown","blue","gray","purple","green","orange"]
    const [tasks, setTasks] = useState([])

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
            <View>
              <Text style={Styles.cardTitle}>Title of the task</Text>
              <Text style={Styles.cardTime}>7.00 PM</Text>
              <FontAwesome5 
                name="trash-alt"
                color={'red'}
                style={Styles.cardDeleteIcon}
                size={20}
              />
            </View>
            <View style={Styles.cardEmptyContainer}></View>
            <View style={Styles.cardImgContainer}>
                <Image source={require("../assets/images/empty-save-texture-room-light.jpg")}
                  resizeMode="contain"
                  style={Styles.cardImg}
                />
            </View>
          </LinearGradient>
        );
    }

    function addTaskButtonPress(){
        navigation.navigate("Screen_AddTask")
    }

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM tango', null,
                (txObj, resultSet) => {setTasks(resultSet.rows._array)},
                (txObj, error) => console.log(error)
            )
        })
    }, [])

    console.log(tasks)
    return(
        <View style={Styles.commonBody} >
            <View style={Styles.addIconContainer}>
                <TouchableOpacity onPress={addTaskButtonPress}>
                    <FontAwesome5
                        name="plus-circle"
                        size={50} 
                        color={'white'}
                    />
                </TouchableOpacity>
            </View>
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
            {
                console.log(tasks)
            }
            </ScrollView> 
        </View>
    )
}