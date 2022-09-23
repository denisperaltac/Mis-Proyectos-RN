import {createContext, useReducer} from 'react';
import {lightTheme, themeReducer, ThemeState} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDrakTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  const setDrakTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('Dark');
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('Light');
  };
  return (
    <ThemeContext.Provider value={{theme, setDrakTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
