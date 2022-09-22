import React, {useRef} from 'react';
import {View, Button, StyleSheet, Animated, Easing} from 'react-native';

export default function useAnimation() {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const startMovingPosition = (
    initPosition: number,
    duration: number = 300,
  ) => {
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();

    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start();

    Animated.timing(position, {
      toValue: -100,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };

  const FadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  return {fadeOut, opacity, position, startMovingPosition, FadeIn};
}
