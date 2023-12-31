import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function TelaInicial() {

  const navigation = useNavigation();

  return (
    <View style ={styles.container}>

        <View style={styles.containerLogo}>
            <Animatable.Image 
            animation="flipInY"
            source = {require('../../../assets/foto-github-dayvid.jpg') } 
            style={styles.imgLogo} 
            resizeMode='contain'/>
        </View>
        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.titulo} > Seja Bem vindo ao meu aplicativo!</Text>
            <Text style={styles.texto} >Quer saber mais sobre a minha vida profissional?Clique em acessar.</Text>
            <TouchableOpacity 
            style={styles.button}
             onPress={()=>{
              navigation.navigate('Curriculo')
             }} >
             <Text style={styles.buttonText}> 
                Acessar
             </Text>
            </TouchableOpacity>
        </Animatable.View>
      
    </View>


  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#6495ED',

  },
  containerLogo:{
    flex:2,
    backgroundColor:'#6495ED',
    justifyContent: 'center',
    alignItems:'center',
  },

  imgLogo:{
    width:'100%',
    borderWidth: 5,
     borderColor:"#fff", 
     borderRadius:200
  },

  containerForm:{
    flex:1,
    backgroundColor:'#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '4%',
    paddingEnd: '4%',
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,

  },

  texto:{
    color: '#a1a1a1',

  },
  button:{
    position: 'absolute',
    backgroundColor: '#6495ED',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    fontSize: 18,
    color:'#FFF',
    fontWeight: 'bold',
  }


  


  
})