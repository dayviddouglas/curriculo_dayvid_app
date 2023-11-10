import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'

export default function Experiencias() {
  return (
    <Animatable.View animation="fadeInLeft" delay={500} style={styles.container}>
      <Text style={styles.tituloExperiencias}>  Experiências: </Text>
      <Text style={styles.experiencias}>
        Estágio em Auditoria no Plaza Shopping (Dez 2019 - Mar 2020).
        {'\n'}
        Estágio no Financeiro pelo Grupo Dorotéias (Dez 2020 - Abril 2021).
        {'\n'}

        Auxiliar Financeiro na Agroquímica do Nordeste (Nov 2021 - Fev
        2022).

      </Text>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    paddingHorizontal: '2%'
   },


  tituloExperiencias:{
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold',
},
experiencias: {
  fontSize: 12,
  marginTop:10
},
    
})