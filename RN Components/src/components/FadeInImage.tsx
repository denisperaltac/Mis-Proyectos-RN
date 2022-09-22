import {View, Text, Animated, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import useAnimation from '../hooks/useAnimation';

interface Props {
  uri: string;
}

const FadeInImage = ({uri}: Props) => {
  const {opacity, FadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    FadeIn();
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="grey"
          size={40}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={FadeIn}
        style={{width: '100%', height: 400, opacity}}
      />
    </View>
  );
};

export default FadeInImage;
