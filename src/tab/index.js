import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FormECursos from '../paginas/FormECursos';
import Experiencias from '../paginas/Experiencias';

import { NavigationContainer } from '@react-navigation/native'
import InfoPessoais from '../paginas/InfoPessoais';
import { Ionicons } from "@expo/vector-icons";

export default function Tab() {

  const Tab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer independent={true}>
          <Tab.Navigator>
                <Tab.Screen name='Informações Pessoais' component={InfoPessoais} options={{headerShown : false, 
                tabBarIcon: ({size, focused,color})=> {
                  if (focused) {
                    return <Ionicons name='clipboard' size={size} color={color}/>
                  }
                    return  <Ionicons name='clipboard-outline' size={size} color={color}/>

                  }
                  }
                 
                } 
                />
                 
                <Tab.Screen name='Formações e Cursos' component={FormECursos} options={{headerShown : false,
                 tabBarIcon: ({color, size, focused})=> {
                  if (focused) {
                    return <Ionicons name='school' size={size} color={color}/>
                  }
                    return  <Ionicons name='school-outline' size={size} color={color}/>

                      } 
                    }
                  } 
                  />
                <Tab.Screen name='Experiencias' component={Experiencias} options={{headerShown : false , 
                tabBarIcon: ({color, size, focused})=> {
                  if (focused) {
                    return <Ionicons name='briefcase' size={size} color={color}/>
                  }
                    return  <Ionicons name='briefcase-outline' size={size} color={color}/>

                      } 
                }} 
                />        
          </Tab.Navigator>
      </NavigationContainer>
      
    </>
    
  )
}

const styles = StyleSheet.create({

})