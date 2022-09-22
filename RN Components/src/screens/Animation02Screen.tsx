import {View, Animated, PanResponder, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import HeaderTitle from '../components/HeaderTitle';

export default function Animation02Screen() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  return (
    <View style={stylesBox.container}>
      <HeaderTitle title="Animation 02" />
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), stylesBox.box]}></Animated.View>
      <View />
    </View>
  );
}

const stylesBox = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#198754',
    borderRadius: 20,
    width: 150,
    height: 150,
  },
});
