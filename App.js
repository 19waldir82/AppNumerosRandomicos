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
    <Text>Gerador De Números Aleatórios</Text>
    <Text>oi</Text>
    <Button title="Gerar Número Aleatório" onPress={geraNumeroAleatório}></Button>
  </View>
  );
};

export default App;