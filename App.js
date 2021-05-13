import 'react-native-gesture-handler';{/* e o primeiro por causa do react navigation na documentação esta pedindo */}
import React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
   <NavigationContainer>
     <StatusBar 
     hidden={true}
     />
     <Routes />

   </NavigationContainer>
  );
}


