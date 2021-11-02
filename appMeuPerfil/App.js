import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
class App extends Component {
  render() {
    let dados = '   Dados Pessoais:';
    let formacao  = '   Formação:';
    let experiencia = '   Experiência:';
    let projetos  = '   Projetos:';


    let img =
      'https://avatars.githubusercontent.com/u/88863342?v=4';
    return (
      <View>
        
        <Text></Text>
        <Text></Text>
        <Text style={{ color: 'darkblue', fontSize: 35, margin: 35 }}>     App Meu Perfil</Text>
        <Image
          source={{ uri:img }}
          style={{margin: 8, width: 395, height: 340 }} 
                
        />

        <Text style={{ fontSize: 25 }}>{dados}</Text>
        <Text style={{ fontSize: 15, margin: 0}}>     Nome:Steve Moreira        
        </Text>        
        <Text style={{ fontSize: 15}}>     Idade:30 anos       
        </Text>
        <Text style={{ fontSize: 15}}>     Status:Casado       
        </Text>
        


        <Text style={{ fontSize: 25 }}>{formacao}</Text>
        <Text style={{ fontSize: 15, margin: 5}}>    Analise e Desenvolvimento de Sistemas
        </Text>



        <Text style={{ fontSize: 25 }}>{experiencia}</Text>
        <Text style={{ fontSize: 15, margin: 5}}>    Tecnode - Desenvolvedor de sistemas mobile
        </Text>

        <Text style={{ fontSize: 25 }}>{projetos}</Text>
        <Text style={{ fontSize: 15}}>     React-Native
        </Text>
        <Text style={{ fontSize: 15}}>     React-Js
        </Text>

        

       
        
      </View>
    )
  }
}
export default App;