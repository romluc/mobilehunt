import React, { Component } from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: 'MobileHunt',
  };

  render() {
    return (
      <View>
        <Text>Pagina Main</Text>
      </View>
    );
  }
}
