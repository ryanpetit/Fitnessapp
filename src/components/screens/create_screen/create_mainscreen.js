import React, { Component } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { LinearGradient } from 'expo';


export default class SaveScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <LinearGradient style={styles.container} colors={['#304352', '#09203f']}>

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});