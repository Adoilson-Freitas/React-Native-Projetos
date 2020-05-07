import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { StatusBar } from 'react-native';

const Start = require('./assets/images/Iniciar.png');
const Stop = require('./assets/images/Parar.png');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {n:0, botao:Start}
    this.timer = null;

    this.Iniciar = this.Iniciar.bind(this);
    this.Restaurar = this.Restaurar.bind(this);
  } 

    Iniciar() {
      let s = this.state;

    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      s.botao = Start;
    } else {
      this.timer = setInterval(() => {
        let s = this.state;
        s.n += 0.01;
        this.setState(s);
      }, 10);

      s.botao = Stop;
    }

    this.setState(s);
  } 
   Restaurar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    } 
    let s = this.state;
    s.n = 0;
    s.botao = Start;
    this.setState(s);
  }
  render() {
    return (
     <>
      <StatusBar barStyle='light-content' backgroundColor='#0C1021'/>
      <View style={styles.container}>
        <Text style={styles.title}>Cronômetro</Text>
        <ImageBackground source={require('./assets/images/principal.png')} style={styles.image}>
        <Text style={styles.timer}>{this.state.n.toFixed(2)}</Text>
       </ImageBackground>
        <TouchableOpacity style={styles.btn} onPress={this.Restaurar}>
            <Text style={styles.btnText}>Restaurar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.Iniciar}>
          <Image source={this.state.botao}/>
          </TouchableOpacity>
      </View>
     </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#464C6E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    marginTop: -40,
    fontWeight: 'bold',
    color: '#D2D6EF',
  },
  image: {
    width: 280,
    height: 280,
    alignItems: "center",
    justifyContent: "center"
  },
  timer: {
    color: '#D2D6EF',
    fontSize: 45,
    fontWeight: 'bold',
  },
  btn: {
   alignItems: 'center',
   justifyContent: "center",
   height: 50,
  },
  btnText: {
    fontSize: 20,
    color: '#D2D6EF',
  },
});
