import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function Curriculo() {

  

  return (
    <Animatable.View  animation="fadeInLeft" delay={500} style ={styles.container}>

    <Text style={styles.tituloInfoPessoais}> Informações Pessoais: </Text>
      <Text style={styles.infoPessoais}> 
      Endereço: Rua Nova, N º 52, Tiúma, São Lourenço Da Mata
      {'\n'}
      Email: dayvidacademico@gmail.com
      {'\n'}
      Whatsapp: (81) 984528120
      {'\n'}
      Likedin: https://www.linkedin.com/in/dayvid-douglas-desenvolvedor/
      {'\n'}
      Github: https://github.com/dayviddouglas 

      </Text>
      <Text style={styles.tituloFormacoes}> Formação: </Text>

      <Text style={styles.formacoes}>Bacharelado em Administração pela Faculdade Fafire.</Text>

      <Text style={styles.tituloCursoemAndamento}>Curso(s) em Andamento: </Text>
     
       <Text style={styles.cursoemAndamento}>Pós-graduando em Engenharia de Software pela Faculdade Fafire; 
       {'\n'}
      Tecnologia em Análise e Desenvolvimento e Sistemas pela Faculdade SENAC PE.
      </Text> 

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

    tituloInfoPessoais: {
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 20,
        fontWeight: 'bold',
    },
    infoPessoais:{
        fontSize: 12,
        marginTop:10
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