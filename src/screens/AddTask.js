import React, { useEffect, useState } from "react";
import { Text, Pressable, View, TextInput, Touchable, ScrollView, Image, ToastAndroid, Alert } from "react-native";
import { Styles } from "../style/styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as SQLite from 'expo-sqlite';

export default function AddTask (){

    const db = SQLite.openDatabase('tasktango.db');

    const [imgContain, setImageContain] = useState(false)
    const [title, setTitle] =  useState('')
    const [desc, setDesc] = useState('')
    const [priority, setPriority] = useState('')

    const func = (val) => {
        setPriority(val)
    }

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS tango (ID INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, desc TEXT, priority TEXT)"
            )
        })

    }

    const sumbit = () => {
        if(!title.match(/[a-zA-Z]/g) || !desc.match(/[a-zA-Z]/g) || priority.length <= 0 )
        {
            Alert.alert("WARNING!", "Title and Description is should be filled with valid values and Priority should be setteled!")
        }else{
            db.transaction(tx => {
                var ex = "INSERT INTO tango (title, desc, priority) VALUES ('"+title+"', '"+desc+"', '"+priority+"')"
                console.log(ex)
                tx.executeSql(ex)
            })
            ToastAndroid.show(`Successfully added the task to the list!`, ToastAndroid.SHORT)
        }
    }

    useEffect(()=> {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS tango(ID INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, desc TEXT, priority TEXT)')
        })
    },[])

    return(
        <View style={Styles.commonBody}>
            <Image
                source={require('../assets/images/medium.jpg')}
                resizeMode="cover"
                style={Styles.addTaskHeroImg}
            />
            <View style={[ Styles.addTaskRows]}>
                <TextInput style={Styles.addTaskInputs} placeholder="Title Of The Task"
                    onChangeText={(value) => {setTitle(value)}}
                />
                <TextInput style={Styles.addTaskInputs} placeholder="Description Of The Task"
                    onChangeText={(value) => {setDesc(value)}}
                />
            </View>
            <View style={[ Styles.addTaskRows, ]}>
                <View style={Styles.colourSelector}>
                    <Pressable onPress={() => {func('#0af512')}} style={[Styles.colourSelectorColour, {backgroundColor: '#0af512', borderTopLeftRadius: 8, borderBottomLeftRadius: 8}]}>
                        {
                            priority === '#0af512' ? 
                            <FontAwesome5
                                name={'check'}
                                color={'#474444'} 
                            /> 
                            : 
                            <Text></Text>
                        }
                    </Pressable>
                    <Pressable onPress={() => {func('#dcf007')}} style={[Styles.colourSelectorColour, {backgroundColor: '#dcf007'}]}>
                        {
                            priority === '#dcf007' ? 
                            <FontAwesome5
                                name={'check'}
                                color={'#474444'} 
                            /> 
                            : 
                            <Text></Text>
                        }
                    </Pressable>
                    <Pressable onPress={() => {func('#f06407')}} style={[Styles.colourSelectorColour, {backgroundColor: '#f06407'}]}>
                        {
                            priority === '#f06407' ? 
                            <FontAwesome5
                                name={'check'}
                                color={'#474444'} 
                            /> 
                            : 
                            <Text></Text>
                        }
                    </Pressable>
                    <Pressable onPress={() => {func('#d40617')}} style={[Styles.colourSelectorColour, {backgroundColor: '#d40617', borderBottomRightRadius: 8, borderTopRightRadius: 8}]}>
                        {
                            priority === '#d40617' ? 
                            <FontAwesome5
                                name={'check'}
                                color={'#474444'} 
                            /> 
                            : 
                            <Text></Text>
                        }
                    </Pressable>
                </View>
                <Pressable style={Styles.addTaskButtons}
                    android_ripple={{ color: '#8a4007', radius: 130, }}
                >
                    <Text style={Styles.addTaskButtonText}>Take A Photo</Text>
                </Pressable>

                {
                    imgContain ? 
                    <Image
                        source={require('../assets/images/empty-save-texture-room-light.jpg')}
                        resizeMode="contain"
                        style={Styles.addTaskImg}
                    /> 
                    :
                    <FontAwesome5 
                        name="images"
                        size={50}
                        color={'#6b6765'}
                        style={{marginTop : '5%'}}
                    />
                }
                <Pressable style={[Styles.addTaskButtons, {backgroundColor: 'green'}]}
                    android_ripple={{ color: '#053b03', radius: 130, }}
                    onPress={() => {sumbit()}}
                >
                    <Text style={Styles.addTaskButtonText}>Submit</Text>
                </Pressable>
            </View>
        </View>
    )
}