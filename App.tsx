import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { LogBox, Text, View } from 'react-native'
import { Navigator } from './src/navigator/Navigator';

LogBox.ignoreLogs(["[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!"]);

const App = () => {
  return (
<NavigationContainer>
  <Navigator/>
</NavigationContainer>
  )
}

export default App;