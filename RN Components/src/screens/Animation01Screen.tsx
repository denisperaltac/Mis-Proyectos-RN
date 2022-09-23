import React, {useContext} from 'react';
import {View, Button, StyleSheet, Animated, Easing} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import useAnimation from '../hooks/useAnimation';

export default function Animation01Screen() {
  const {fadeOut, opacity, position, startMovingPosition} = useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <HeaderTitle title="Animation 01" />
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          opacity: opacity,
          marginBottom: 20,
          transform: [
            {
              translateY: position,
            },
          ],
        }}></Animated.View>
      <View style={{flexDirection: 'row'}}>
        <Button
          title="Fade In"
          color={colors.primary}
          onPress={() => {
            startMovingPosition(-100, 1200);
          }}
        />
        <View style={{flex: 0.1}} />
        <Button title="Fade Out" onPress={fadeOut} color={colors.primary} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
