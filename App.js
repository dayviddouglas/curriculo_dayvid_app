import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/rotas';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#6495ED' barStyle="dark-content" />
      <Rotas/>
    </NavigationContainer>
  );
}

