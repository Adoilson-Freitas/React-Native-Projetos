import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {consumido:0, status:'Ruim', pct:0 };

    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
  }

  atualizar() {
     let s = this.state;
     s.pct = parseInt(((s.consumido/2000)*100));

     if(s.pct >= 100) {
       s.status = "Bom";
     } else {
      s.status = "Ruim";
     }

     this.setState(s);  
  }

  addCopo() {
    let s = this.state;
    s.consumido += 200;
    this.setState(s);

    this.atualizar();
  }
  
render() {
  return (
    <>
     <View style={styles.container}>
       <View style={styles.infoArea}>
         <View style={styles.area}>
           <Text style={styles.areaTitulo}>Meta</Text>
           <Text style={styles.areaDado}>2000ml</Text>
         </View>
         <View style={styles.area}>
         <Text style={styles.areaTitulo}>Consumido</Text>
         <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
         </View>
         <View style={styles.area}>
         <Text style={styles.areaTitulo}>Status</Text>
         <Text style={styles.areaDado}>{this.state.status}</Text>
         </View>
       </View>
     </View>
      <View style={styles.whaterContainer}>
       <View style={styles.pctArea}>
       <Text style={styles.pctTexto}>{this.state.pct}%</Text>
       </View>
       <View style={styles.btnArea}>
       <TouchableOpacity style={styles.btn} onPress={this.addCopo}>
         <Text style={styles.btnTexto}>Beber 200ml</Text>
       </TouchableOpacity>
       </View>
    </View>
    </>
   );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoArea: {
    flex: 1,
    flexDirection: 'row',
    marginTop:80,
  },
  area: {
    flex: 1,
    alignItems: 'center',
  },
  areaTitulo: {
    color: '#00bfff',
  },
  areaDado: {
    color: '#00006f',
    fontSize: 15,
    fontWeight: 'bold',
  },
  whaterContainer: {
    flex: 2,
    borderTopRightRadius: 400,
    backgroundColor: '#00bfff',
  },
  pctArea: {
    marginTop: 130,
    alignItems: 'center'
  },
  pctTexto: {
    color: '#fff',
    fontSize: 50,
  },
  btnArea: {
    marginTop: 30,
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#00dfff',
    padding:10,
    borderRadius: 20,
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
