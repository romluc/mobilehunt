import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class App extends Component {
  state = [];

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the freak show!</Text>
      </View>
    );
  }
}
