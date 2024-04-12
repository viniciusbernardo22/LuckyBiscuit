import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    };

    this.frases = [
      'O sucesso vem da persistência, não da sorte.',
      'Acredite no poder dos seus sonhos.',
      'Grandes jornadas começam com um único passo.',
      'A sorte favorece os audazes.',
      'A melhor hora para começar é agora.',
      'Siga sua intuição, ela raramente falha.',
      'A vida é uma aventura, aproveite cada momento.',
      'Seja a mudança que deseja ver no mundo.',
      'Aprenda com o passado, viva no presente, sonhe com o futuro.',
      'O caminho para o sucesso é pavimentado com trabalho árduo e determinação.',
    ];

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this)
  }

  quebrarBiscoito = () => {
    const tamanhoLista = this.frases.length
    const i = Math.floor(Math.random() * tamanhoLista);
    
    this.setState({
      textoFrase: this.frases[i],
      img: require('./src/biscoitoAberto.png')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
