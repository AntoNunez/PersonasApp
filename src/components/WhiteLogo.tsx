import React from 'react';
import {Image, View} from 'react-native';

export const WhiteLogo = () => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/tres.png')}
        style={{
          width: 130,
          height: 110,
          shadowColor: 'rgba(242, 243, 244)',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 4.27,
        }}
      />
    </View>
  );
};
