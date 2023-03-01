import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ResultsScreen } from '../screens/ResultsScreen';
import { AboutScreen } from '../screens/AboutScreen';






const Stack = createStackNavigator();

export const Navigator = () => {

  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
     
      
    </Stack.Navigator>
  );
}