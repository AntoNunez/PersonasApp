import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
// import { PersonProvider } from './src/context/PersonContex';


/* const AppState = ({children}: any)=>{
  return (
    <PersonProvider>
      {children}
    </PersonProvider>
  )
}  */

const App = () => {
  return (
    <NavigationContainer>
      <Navigator/>
      {/*  <AppState>
      </AppState>  */}
     
    </NavigationContainer>
  )
}

export default App;