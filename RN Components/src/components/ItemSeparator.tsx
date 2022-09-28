import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ItemSeparator = () => {
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 5,
        backgroundColor: dividerColor,
      }}
    />
  );
};

export default ItemSeparator;
