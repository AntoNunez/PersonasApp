import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons'
import {Background} from '../components/Background';
import { FadeInImage } from '../components/FadeInImage';
import {homeStyle} from '../theme/homeTheme';

interface Props extends StackScreenProps<any, any> {}

export const AboutScreen = ({navigation}: Props) => {
  return (
    <>
      <Background />
      <ScrollView
        style={{ flex: 1, backgroundColor:'#52b4c7' }}>
        <View style={styles.AboutContainer}>
          <Animatable.Text
            animation="slideInDown"
            style={styles.AboutTitle}
            duration={3000}>
            About Me
          </Animatable.Text>
          <View />
          <FadeInImage uri={"https://mir-s3-cdn-cf.behance.net/project_modules/1400/0cfd9527075137.5635f8ed3a460.jpg"} />
          <Animatable.Text
            animation="fadeInUp"
            style={styles.AboutDescription}
            duration={3000}>
            Hola. mi nombre es Antonio Nuñez, soy un Desarrollador full-stack en desarrollo, entusiasmado e
            ilusionado con crecer en este mundo de las Apps, me encatan los juegos Mame y los perros.
          </Animatable.Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={homeStyle.buttonReturn}
          onPress={() => navigation.replace('HomeScreen')}>
          <Icon
          name='arrow-back-outline'
          size={40}
          color='white'
          
          />
          {/* <Text style={homeStyle.buttonText}></Text> */}
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  AboutContainer: {
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginTop: 20,
    marginBottom: 50,
  },
  AboutTitle: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 170,
    marginBottom: 20,
    paddingLeft: 75,
  },
  AboutDescription: {
    color: 'white',
    fontSize: 20,
    marginTop: 40,
  },
});
