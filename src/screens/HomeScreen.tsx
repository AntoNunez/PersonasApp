import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { homeStyle } from '../theme/homeTheme'

interface Props extends StackScreenProps<any, any> { }

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <>
       <Background/>
       <KeyboardAvoidingView
       style={{ flex: 1 }}
       behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
       >
       <View style = {homeStyle.homeContainer}>
       <WhiteLogo/>
       <Text style ={homeStyle.title}>Personas</Text>
       <View style={homeStyle.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={homeStyle.button}
          onPress={() => navigation.navigate('RegisterScreen') }
       
        >
          <Text style={homeStyle.buttonText}>Registro</Text>

        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={homeStyle.button}
          onPress={() => navigation.navigate('ResultsScreen') }
          //onPress={() => navigation.navigate('PersonsNavigator') }
          
        >
          <Text style={homeStyle.buttonText}>Resultados</Text>

        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={homeStyle.button}
          onPress={() => navigation.navigate('AboutScreen') }
          //cambiar por .replace para eliminar la pantalla de home
        >
          <Text style={homeStyle.buttonText}>Acerca De</Text>

        </TouchableOpacity>
       </View>
       </View>
       </KeyboardAvoidingView>
    </>
  )
}
