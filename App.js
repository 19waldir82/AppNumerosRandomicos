import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

const geraNumeroAleatório = () => {
  let num = Math.floor(Math.random() * 10) 
  alert(num)
}

const App = () => {
  return (
  <View>
    <Text style={style.texto}>Gerador De Números Aleatórios</Text>
    <Button title="Gerar Número Aleatório" onPress={geraNumeroAleatório}></Button>
  </View>
  );
};

const style= {
  texto: {
    fontSize: 20,
    marginBottom: 30,
  }
}

export default App;