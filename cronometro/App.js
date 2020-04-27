import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {n:0, botao:'Iniciar'}
    this.timer = null;

    this.Iniciar = this.Iniciar.bind(this);
    this.Restaurar = this.Restaurar.bind(this);
  } 

    Iniciar() {
      let s = this.state;

    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      s.botao = 'Iniciar';
    } else {
      this.timer = setInterval(() => {
        let s = this.state;
        s.n += 0.01;
        this.setState(s);
      }, 10);

      s.botao = 'Parar';
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
    s.botao = 'Iniciar';
    this.setState(s);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timer}>{this.state.n.toFixed(2)}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.Iniciar}>
          <Text style={styles.btnText}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.Restaurar}>
            <Text style={styles.btnText}>Restaurar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    color: '#000010',
    fontSize: 50,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    height: 50,
    marginTop: 100,
  },
  btn: {
   flex: 1,
   justifyContent: 'space-around', 
   alignItems: 'center',
   height: 50,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000080',
  },
});
