import React, { useRef, useState } from 'react'
import { Animated } from 'react-native';

export const useAnimation = () => {


  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;


  const fadeInLogo = () => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start();
  }
  const fadeInText = () => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true
      }
    ).start();

  }

  return {
    fadeInLogo,
    opacity,
    position,
    fadeInText,
  }
}
