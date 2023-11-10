import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'


export default function FormECursos() {
  return (
    < Animatable.View  animation="fadeInLeft" delay={500} style={styles.container}>
      <Text style={styles.tituloFormacoes}> Formação: </Text>

    <Text style={styles.formacoes}>Bacharelado em Administração pela Faculdade Fafire.</Text>

     <Text style={styles.tituloCursoemAndamento}>Curso(s) em Andamento: </Text>

    <Text style={styles.cursoemAndamento}>Pós-graduando em Engenharia de Software pela Faculdade Fafire;
  {'\n'}
  Tecnologia em Análise e Desenvolvimento e Sistemas pela Faculdade SENAC PE.
</Text>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: '2%',
       },

       tituloFormacoes:{
        fontSize: 18,
         alignSelf: 'center',
         marginTop: 20,
         fontWeight: 'bold',
      },
      formacoes:{
        fontSize: 12,
        marginTop:10
      },
      tituloCursoemAndamento:{
          fontSize: 18,
          alignSelf: 'center',
          marginTop: 20,
          fontWeight: 'bold',
      },
  
      cursoemAndamento:{
          fontSize: 12,
        marginTop:10
  
      },
})