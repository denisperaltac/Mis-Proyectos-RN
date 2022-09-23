import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ThemeContext} from '../context/themeContext/ThemeContext';

import AlertScreen from '../screens/AlertScreen';
import Animation01Screen from '../screens/Animation01Screen';
import Animation02Screen from '../screens/Animation02Screen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import CustomSectionList from '../screens/CustomSectionList';
import HomeScreen from '../screens/HomeScreen';
import InfiniteScroolScreen from '../screens/InfiniteScroolScreen';
import ModalScreen from '../screens/ModalScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import SlidesScreen from '../screens/SlidesScreen';
import SwitchScreen from '../screens/SwitchScreen';
import TextInputScreen from '../screens/TextInputScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            // backgroundColor: 'white'
          },
        }}
        initialRouteName="SlidesScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Animation01Screen" component={Animation01Screen} />
        <Stack.Screen name="Animation02Screen" component={Animation02Screen} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputs" component={TextInputScreen} />
        <Stack.Screen name="PullToRefresh" component={PullToRefreshScreen} />
        <Stack.Screen name="CustomSectionList" component={CustomSectionList} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen name="InfiniteScroll" component={InfiniteScroolScreen} />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
