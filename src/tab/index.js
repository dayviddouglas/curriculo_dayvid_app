import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FormECursos from '../paginas/FormECursos';
import Experiencias from '../paginas/Experiencias';

import { NavigationContainer } from '@react-navigation/native'
import InfoPessoais from '../paginas/InfoPessoais';

export default function Tab() {

  const Tab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer independent={true}>
          <Tab.Navigator>
                <Tab.Screen name='Informações Pessoais' component={InfoPessoais} options={{headerShown : false}} />
                <Tab.Screen name='Formações e Cursos' component={FormECursos} options={{headerShown : false}} />
                <Tab.Screen name='Experiencias' component={Experiencias} options={{headerShown : false}} />        
          </Tab.Navigator>
      </NavigationContainer>
      
    </>
    
  )
}

const styles = StyleSheet.create({

})