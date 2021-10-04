import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Pressable} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
    };
    
    this.contar = this.contar.bind(this);
  }
 
  contar(sinal){
    if (sinal == '+'){
      this.setState({contador: this.state.contador + 1});
    }
    else if (this.state.contador > 0){
      this.setState({contador: this.state.contador - 1});
    }
  }
 
  render(){
    return(
      <View style={styles.area}>
 
        <Text style={styles.titulo}>Contador de Pessoas</Text>

        <Text style={styles.texto}> {this.state.contador} </Text>

        <Pressable style={[styles.botao, {backgroundColor: 'green'}]} onPress={() => {this.contar('+')}}>
          <Text style={styles.textoBotao}>+</Text>
        </Pressable>

        <Pressable style={[styles.botao, {backgroundColor: 'red'}]} onPress={() => {this.contar('-')}}>
          <Text style={styles.textoBotao}>-</Text>
        </Pressable>
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  titulo:{
    textAlign: 'center',
    fontSize: 25,
  },
  botao:{
    width: 200,
    height: 50,
    marginTop: 20,
    marginStart: 90,
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 32,
  },
  texto:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 90,
    fontSize: 32,
  },

})
 
export default App;