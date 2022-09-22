import {createContext} from 'react';

interface ThemeContextProps {
  theme: any;
  setDrakTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const theme = {};
  const setDrakTheme = () => {
    console.log('Dark');
  };

  const setLightTheme = () => {
    console.log('Light');
  };
  return (
    <ThemeContext.Provider value={{theme, setDrakTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
