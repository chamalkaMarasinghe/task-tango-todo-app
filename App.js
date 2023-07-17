import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entry from './src/screens/Entry';
import Home from './src/screens/Home';
import { setStatusBarHidden } from 'expo-status-bar';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen_Entry'>
        <Stack.Screen name='Screen_Entry' component={Entry} options={{header: () => null}}/>
        <Stack.Screen name='Screen_Home' component={Home} 
          options={{
            title: 'Your Tasks', 
            headerStyle: {
             backgroundColor: 'orange',
            },
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

