import React, { useState } from 'react';
import { Image, StyleSheet, Text,TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [texto, setTexto] = useState('');


  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };


  if (selectedImage !== null) {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.titulo}>Criador de Memes</Text>
        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Digite seu meme" onChangeText={(texto) => setTexto(texto)} />
        </View>
        <ImageBackground source={{ uri: selectedImage.localUri }} style={styles.imagem}>
          <Text style={styles.texto1}>{texto}</Text>
        </ImageBackground>

          <Text style={styles.texto2}><Icon name="print" size={20} color="#FFF" /> tire um print e recorte para salvar</Text>

        <TouchableOpacity onPress={openImagePickerAsync} style={styles.btn}>
          <Text style={styles.txtbutton}><Icon name="picture-o" size={20} color="#FFF" /> Pegar outra foto</Text>
        </TouchableOpacity>
      </View>
    );
  }
 
  return (
    <View style={styles.sectionContainer}>
       <View>
          <Text style={styles.titulo}>Criador de Memes</Text>
        </View>
        <Image source={require('./assets/logo.png')} style={styles.imagem} />
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.btn}>
        <Text style={styles.txtbutton}><Icon name="picture-o" size={20} color="#FFF" /> Pegar foto</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000010',
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    marginBottom: 80,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
  },
  inputArea: {
    alignSelf: 'stretch',
  },
  imagem: {
    paddingVertical: 30,
    width: 300,
    height: 300,
    borderRadius: 10,
    marginTop:20
  },

  input: {
    fontSize: 15,
    padding: 10,
    borderRadius: 4,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  btn: {
    width: 200,
    borderRadius: 4,
    marginTop: 20,
    padding: 6,
    backgroundColor: 'transparent',
  },
  txtbutton: {
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 4,
    fontWeight: '600',
    color: '#fff',
  },
  texto1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 10,
    marginTop: -20
  },
  texto2: {
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 4,
    fontWeight: '600',
    marginTop: 20,
    color: '#fff',
  },

});