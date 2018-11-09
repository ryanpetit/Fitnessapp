import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';


export default class SaveScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <LinearGradient style={styles.container} colors={['#005A89', '#168A78']}>
        <View>
          < Button title="Hello from premade screen" color="black"
            onPress={() => { this.props.navigation.goBack() }} />
        </View>
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