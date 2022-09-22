import {View, Text} from 'react-native';
import React from 'react';
import styles from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';

interface Props {
  title: string;
  margin?: number;
  size?: number;
}
export default function HeaderTitle({title, margin = 20, size = 30}: Props) {
  const {colors} = useTheme();
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
