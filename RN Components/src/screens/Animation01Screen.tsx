import React from 'react';
import {View, Button, StyleSheet, Animated, Easing} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import useAnimation from '../hooks/useAnimation';

export default function Animation01Screen() {
  const {fadeOut, opacity, position, startMovingPosition} = useAnimation();

  return (
    <View style={styles.container}>
      <HeaderTitle title="Animation 01" />
      <Animated.View
        style={{
          ...styles.purpleBox,
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
          color="#198754"
          onPress={() => {
            startMovingPosition(-100, 1200);
          }}
        />
        <View style={{flex: 0.1}} />
        <Button title="Fade Out" onPress={fadeOut} color="#198754" />
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
    backgroundColor: '#198754',
    width: 150,
    height: 150,
  },
});
