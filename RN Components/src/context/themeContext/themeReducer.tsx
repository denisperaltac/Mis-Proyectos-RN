import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
  colors: {
    primary: string;
    secundary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'black',
  colors: {
    primary: '#198754',
    secundary: '#084F6A',
    background: 'white',
    card: '#198754',
    text: 'black',
    border: 'black',
    notification: '#198754',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'white',
  colors: {
    primary: '#084F6A',
    secundary: '#198754',
    background: 'black',
    card: '#084F6A',
    text: 'white',
    border: 'white',
    notification: '#198754',
  },
};

export const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};

    case 'set_dark_theme':
      return {...darkTheme};
    default:
      return state;
  }
};
