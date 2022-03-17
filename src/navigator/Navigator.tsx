import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen';
import { GroupScreen } from '../screens/GroupScreen';
import { CareerScreen } from '../screens/CareerScreen';

const Stack = createStackNavigator();
export type RootStackParams = {
  CareerScreen: any
  HomeScreen:{career: string[], title: string}
  GroupScreen: {title: string, group: string}
}
export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="CareerScreen" component={CareerScreen} />  
      <Stack.Screen name="HomeScreen" component={HomeScreen} />        
      <Stack.Screen name="GroupScreen" component={GroupScreen} />
           

    </Stack.Navigator>
  )
}