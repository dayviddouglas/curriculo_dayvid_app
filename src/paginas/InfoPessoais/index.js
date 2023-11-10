import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import Tab from '../../tab'

export default function InfoPessoais() {
  return (
    <>
   
    <Animatable.View style={styles.container} animation="fadeInLeft" delay={500} >
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
    </Animatable.View>

  

    </>


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
});