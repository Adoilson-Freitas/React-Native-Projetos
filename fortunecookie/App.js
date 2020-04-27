import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');

  const frases = [
    'Eu acredito na sorte e percebo que, quanto mais trabalho, mais sorte eu tenho.', 
    'Nunca jogue a toalha. Use-a para enxugar o rosto e siga em frente.',
    'Quando Deus fecha uma porta, ele pode estar abrindo uma janela.',
    'Acredite que, em última análise, a função do líder é espalhar esperança.',
    'A alegria está na luta, na tentativa, no sofrimento envolvido. Não na vitória propriamente dita.', 
    'Conhecer a si mesmo é o começo da sabedoria.', 
    'Muitas vezes, a diferença entre ganhar e perder é não desistir.', 
    'O único lugar em que o sucesso vem antes de trabalho é no dicionário.', 
    'Por mais longa que seja a noite, o sol volta sempre a brilhar.', 
    'O otimista vê uma oportunidade em cada desastre. O pessimista vê um desastre em cada oportunidade.', 
    'A vitória pertence ao mais perseverante.', 
    'Persiga seus sonhos, trabalhe duro, pratique e persevere.', 
    'Se você cair sete vezes, levante-se oito.'];

  function quebrarBiscoito() {
    let s = texto;

    let r = Math.floor(Math.random() * frases.length);

    s = frases[r];
    setTexto(s)
  }

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.title}>Biscoito da Sorte</Text>
      </View>

      <Image 
        style={styles.img} 
        source={require('./assets/cookie.png')}
      />

  <Text style={styles.text} >"{texto}"</Text>

      <TouchableOpacity style={styles.btn} onPress={quebrarBiscoito}>
        <Text style={styles.txtbutton}>Quebrar Biscoito</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    marginTop: -120,
    borderRadius: 4,
    color: '#bf8040',
    fontWeight: 'bold',
  },
  img: {
    width: 300,
    height: 200,
  },
  text: {
    fontSize: 16,
    color: '#bf8040',
    margin: 20,
    fontStyle: 'italic',
  },
  btn: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderColor: '#bf8040',
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  txtbutton: {
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
    borderRadius: 4,
    color: '#bf8040',
    fontWeight: 'bold',
  },
});
