import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import FadeScreen from './src/Screens/FadeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
}
