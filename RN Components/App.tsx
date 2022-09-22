import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

// const CustomTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     // primary: string;
//     // background: 'black',
//     // card: string;
//     //  text: 'white',
//     // border: string;
//     // notification: string;
//   },
// };
const App = () => {
  return (
    <AppState>
      {/*theme={DarkTheme} */}
      <Navigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default App;
