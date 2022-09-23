import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import styles from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  title: string;
  margin?: number;
  size?: number;
}
export default function HeaderTitle({title, margin = 20, size = 30}: Props) {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  return (
    <View style={{backgroundColor: colors.background}}>
      <Text
        style={{
          ...styles.title,
          fontSize: size,
          marginTop: margin + top,
          marginBottom: margin,
          color: colors.text,
        }}>
        {title}
      </Text>
    </View>
  );
}
