import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { LinearGradient } from 'expo'
import { scale } from 'react-native-size-matters';
import { withNavigation } from 'react-navigation'
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons'
import { Icon } from 'react-native-elements';

// Gradients form https://webgradients.com

var strengthIcon = require('../../../../assets/Strength.jpeg');
var staminaIcon = require('../../../../assets/Stamina.jpeg');
var stabilityIcon = require('../../../../assets/Stability.jpeg');

export default class PremadeScreen extends Component {
  static navigationOptions = {
    header: null,
    //drawer nav settings for page, this adds a button to the drawer nav that links to this page
    drawerLabel: 'Premade',
    drawerIcon: ({ tintColor }) => (
      <Feather name="play-circle" color='#FFFFFF' />
    )
  }

  render() {
    return (
      //<LinearGradient style={styles.container} colors={['#005A89', '#168A78']}>
      <LinearGradient style={styles.container} colors={['#304352', '#09203f']}>

        {/* Top of screen */}
        <View style={styles.top}>
          <AntDesign name="left" size={27} color='#A3B7C3' onPress={() => this.props.navigation.goBack()} opacity={0.6} />
          <Text adjustsFontSizeToFitWidth={true} numberOfLines={2} style={{ color: '#A3B7C3', fontSize: scale(40), fontWeight: 'bold', textAlign: "center" }}>Premade Workouts</Text>
          <AntDesign name="menufold" size={27} color='#A3B7C3' onPress={() => this.props.navigation.openDrawer()} opacity={0.6} />

        </View>

        {/* Middle of screen */}
        <View style={styles.text_bar} ></View>

        {/* Bottom of screen */}

        <View style={{ flex: 3, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', padding: 5 }}>
          <TouchableOpacity
            style={styles.button_inner}
            onPress={() => { this.props.navigation.navigate('Strengthscreen') }}>

            <ImageBackground source={strengthIcon} imageStyle={{ borderRadius: 25 }} style={styles.img}>
              <Text style={styles.imgtext}> Strength </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 3, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', padding: 5 }}>
          <TouchableOpacity
            style={styles.button_inner}
            onPress={() => { this.props.navigation.navigate('Staminascreen') }}>
            <ImageBackground source={staminaIcon} imageStyle={{ borderRadius: 25 }} style={styles.img}>
              <Text style={styles.imgtext}> Stamina </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 3, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', padding: 5, paddingBottom: 30 }}>
          <TouchableOpacity
            style={styles.button_inner}
            onPress={() => { this.props.navigation.navigate('Stabilityscreen') }}>
            <ImageBackground source={stabilityIcon} imageStyle={{ borderRadius: 25 }} style={styles.img}>
              <Text style={styles.imgtext}> Stability </Text>
            </ImageBackground>
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
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 4 },
    opacity: .6,
    flexDirection: 'row',
    margin: 5
  },
  text_bar: {
    flex: .1,
    margin: 8,
    borderRadius: 15,
    backgroundColor: '#A3B7C3',
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 4 },
    
  },
  button_inner: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 4 },
    opacity: .6,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 150 / 2
  },

  imgtext: {
    color: '#A3B7C3',
    fontSize: scale(30),
    fontWeight: 'bold',
    textAlign: 'center',
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 4 },
  }
});