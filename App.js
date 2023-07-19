import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entry from './src/screens/Entry';
import Home from './src/screens/Home';
import AddTask from './src/screens/AddTask';
import Camera from './src/screens/MyCamera';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen_AddTask'>
        <Stack.Screen name='Screen_Entry' component={Entry} options={{header: () => null}}/>
        <Stack.Screen name='Screen_Home' component={Home} 
          options={{
            title: 'Your Tasks', 
            headerStyle: {
             backgroundColor: 'orange',
            },
          }}
        />
        <Stack.Screen name='Screen_AddTask' component={AddTask}
          options={{
            title: 'Add Tasks', 
            headerStyle: {
              backgroundColor: 'orange',
            },
          }} 
        />
        <Stack.Screen name="Screen_Camera" component={Camera}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

