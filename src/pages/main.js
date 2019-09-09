import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import api from '../services/api';

// import { Container } from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: 'MobileHunt',
  };

  state = {
    docs: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const { docs } = response.data;
    this.setState({ docs });
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
