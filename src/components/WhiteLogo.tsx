import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const WhiteLogo = () => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/tres.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo:{
    width: 130,
          height: 110,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 4.27,
       
  }
})
