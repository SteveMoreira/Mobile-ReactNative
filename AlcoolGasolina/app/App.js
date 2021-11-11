import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image} from 'react-native';
 

export default function App(){
  

    const [valor1, setValor1]=useState(0)
    const [valor2, setValor2]=useState(0)
    const [resultado, setResultado]=useState(0)
    const [res, setRes]=useState('')
    const img = 'http://minaspetro.com.br/blog/wp-content/uploads/2017/12/como-escolher-o-melhor-local-para-montar-um-posto-de-combustivel-770x400.jpeg';

    const dividir = () => {
      setResultado(parseInt(valor1)/parseInt(valor2))
    }

    const gasAlcool =() =>{
      if(resultado > 0.7){
        setRes('Gasolina')

      } else{
        setRes('Alcool')
      }
    }

   

  return (
    <View>

    <Text style={styles.titulo}>Gasolina ou Alcool</Text>

     
    <Image
          source={{ uri: img}}
          style={{ width: 500, height: 300}}
    />

    <TextInput 
    style={styles.texto} 
    //value={String(valor1)}
    onChangeText={(texto) => {setValor1(texto)}}
    placeholder='Gasolina'>
    </TextInput>


    <TextInput 
    style={styles.texto} 
    //value={String(valor2)}
    onChangeText={(texto) => {setValor2(texto)}}
    placeholder='Alcool'>
    </TextInput>

    {/* <Text style={styles.texto}> {resultado} </Text> */}
    <Text style={styles.texto}> {res} </Text>

    <Pressable style={styles.botao, {backgroundColor:'#00AB6F'}} 
    onPress={() => {dividir(); gasAlcool();} }>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>
     
    
    </View>


  )
} 

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  titulo:{
    textAlign: 'center',
    fontSize: 50,
    marginTop: 100
  },
  texto:{
    textAlign: 'center',
    fontSize: 35,
    borderColor: '#00AB6F',
    borderRadius: 10,
    borderWidth: 2,
    padding: 15,
  },
  botao:{
    width: 200,
    height: 50,
    marginStart: 120,
    marginTop: 20,
    
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 30,
    color: 'white'
  }


})
 
