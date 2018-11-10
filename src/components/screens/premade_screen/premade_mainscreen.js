import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo'
import { scale } from 'react-native-size-matters';
import { withNavigation } from 'react-navigation'
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons'

// Gradients form https://webgradients.com

export default class PremadeScreen extends Component{
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      //<LinearGradient style={styles.container} colors={['#005A89', '#168A78']}>
      <LinearGradient style={styles.container} colors={['#304352', '#09203f']}>

        {/* Top of screen */}
        <View style={styles.top}>
          <Text adjustsFontSizeToFitWidth={true} numberOfLines={2} style={{ color: '#A3B7C3', fontSize: scale(60), fontWeight: 'bold', textAlign: "center", width: '100%' }}>Premade Workouts</Text>
        </View>

        {/* Middle of screen */}
        <View style={styles.text_bar} ></View>

        {/* Bottom of screen */}

        <View style={{ flex: 3, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', paddingBottom: 10 }}>
          <TouchableOpacity
            style={styles.button_inner}
            onPress={() => { this.props.navigation.navigate('Strengthscreen') }}>
            <MaterialCommunityIcons name="plus-box-outline" size={100} color="#A3B7C3" />
            <Text style={{ color: '#A3B7C3', fontSize: scale(30), fontWeight: 'bold' }}> Strength </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_inner}
            onPress={() => { this.props.navigation.navigate('Staminascreen') }}>
            <Feather name="play-circle" size={95} color="#A3B7C3" />
            <Text style={{ color: '#A3B7C3', fontSize: scale(30), fontWeight: 'bold', paddingTop: 10 }}> Stamina </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 3, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', paddingTop: 10 }}>
          <TouchableOpacity
            style={styles.button_inner}
            onPress={() => { this.props.navigation.navigate('Stabilityscreen') }}>
            <Feather name="save" size={100} color="#A3B7C3" />
            <Text style={{ color: '#A3B7C3', fontSize: scale(30), fontWeight: 'bold' }}> Stability </Text>
          </TouchableOpacity>

          
        </View>

      </LinearGradient >
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 4 },
    opacity: .6
  },
  text_bar: {
    flex: .1,
    margin: 8,
    borderRadius: 15,
    backgroundColor: '#A3B7C3',
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 4 },
    opacity: .6
  },
  button_inner: {
    height: '70%',
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 4 },
    //backgroundColor: 'rgba(24, 229, 240, 0.25)',
    backgroundColor: 'rgba(104, 104, 104, 0.2)',
    borderRadius: 30,
    opacity: .6,
  },
});