import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_darK_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#198754',
    background: 'lightgrey',
    card: '#198754',
    text: 'black',
    border: 'black',
    notification: '#198754',
  },
};
export const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case 'set_light_theme':
      return lightTheme;

    default:
      return state;
  }
};
