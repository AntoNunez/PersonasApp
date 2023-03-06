import {StackScreenProps} from '@react-navigation/stack';
import axios from 'axios';
import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

import {WhiteLogo} from '../components/WhiteLogo';

import {homeStyle} from '../theme/homeTheme';

interface Props extends StackScreenProps<any, any> {}

const baseUrl = 'http://192.168.0.102:8080/api';



export const RegisterScreen = ({navigation}: Props) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChangeNameHandler = (nombre: React.SetStateAction<string>) => {
    setNombre(nombre);
  };

  const onChangeEmailHandler = (email: React.SetStateAction<string>) => {
    setEmail(email);
  };
  const onChangeAreaHandler = (area: React.SetStateAction<string>) => {
    setArea(area);
  };

  const onSubmitFormHandler = async (event: any) => {
    if (!nombre.trim() || !email.trim() || !area.trim()) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/persons`, {
        nombre,
        email,
        area: area.toLocaleLowerCase(),
      });
      if (response.status === 201) {
        Alert.alert('Saved!!!', 'Guardado Exitosamente', [
          
          {text: 'OK', onPress:() => navigation.replace('HomeScreen')},
        ]);
        console.log(response.status);
        setIsLoading(false);
        setNombre('');
        setEmail('');
        setArea('');
      } else {
        throw new Error('An error has occurred');
      }
    } catch (error) {
      Alert.alert('Error!!!', 'Error al guardar los datos', [
          
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      console.log(error);
      setIsLoading(false);
    }
  };



  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: '#52b4c7'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={homeStyle.homeContainer}>
          <WhiteLogo />
          <Text style={homeStyle.title}>Registro</Text>
          <Text style={homeStyle.label}>Nombre:</Text>
          <TextInput
            placeholder="Ingrese su nombre"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            style={[
              homeStyle.inputField,
              Platform.OS === 'ios' && homeStyle.inputFieldIOS,
            ]}
            selectionColor="white"
            value={nombre} 
            editable={!isLoading}
            onChangeText={onChangeNameHandler}
            autoCapitalize="words"
            autoCorrect={false}
          />

          <Text style={homeStyle.label}>Area:</Text>
          <TextInput
            placeholder="area de trabajo" 
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            style={[
              homeStyle.inputField,
              Platform.OS === 'ios' && homeStyle.inputFieldIOS,
            ]}
            selectionColor="white"
            value={area}
            editable={!isLoading}
            onChangeText={onChangeAreaHandler}
            autoCapitalize="words"
            autoCorrect={false}
          />

          <Text style={homeStyle.label}>Email:</Text>
          <TextInput
            placeholder="Ingrese su email"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid="white"
            style={[
              homeStyle.inputField,
              Platform.OS === 'ios' && homeStyle.inputFieldIOS,
            ]}
            selectionColor="white"
            value={email}
            editable={!isLoading}
            onChangeText={onChangeEmailHandler}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={homeStyle.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={homeStyle.button}
              onPress={onSubmitFormHandler }>
              <Text style={homeStyle.buttonText}>Guardar</Text>
            </TouchableOpacity>
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
          {/* <Text style={homeStyle.buttonText}>Volver</Text> */}
      
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
