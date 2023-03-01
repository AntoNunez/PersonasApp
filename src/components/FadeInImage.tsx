import React from 'react';
import {Animated} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
}

export const FadeInImage = ({uri}: Props) => {
  const {opacity, fadeIn} = useAnimation();

  return (
    <Animated.Image
      source={{uri}}
      onLoadEnd={()=>fadeIn(3000)}
      style={{
        width: 320,
        height: 210,
        borderRadius:8,
        opacity,
        alignItems: 'center',
        

       
      }}
    />
  );
};
