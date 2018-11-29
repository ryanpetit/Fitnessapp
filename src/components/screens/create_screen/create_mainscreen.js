
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import { TextInput } from 'react-native-gesture-handler';
import firestore from '../database'
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation'

export default class CreateScreen extends React.Component {
  static navigationOptions = {
    header: null,
    drawerLabel: 'Create',

  };
  render() {
    return (
      <LinearGradient style={styles.container} colors={['#434343', '#000000']}>
        <View style={styles.top}>
          <AntDesign name="left" size={35} color='orange' onPress={() => this.props.navigation.navigate('Home')} opacity={0.6} />
          <Text style={{ color: 'orange', fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}> Create Workout </Text>
          <AntDesign name="menufold" size={35} color='orange' onPress={() => this.props.navigation.openDrawer()} opacity={0.6} />
        </View>


      </LinearGradient>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text_bar: {
    flex: .1,
    margin: 2,
    borderRadius: 15,
    backgroundColor: 'orange',
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 4 },
    opacity: .6
  },
  top: {
    flex: .7,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 4 },
    opacity: .6,
    flexDirection: 'row',
    marginTop: 50
  },
  bottom: {
    flex: 5,
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 4 },
    opacity: .6
  },
  listView: {
    flex: 1,
    margin: 10,
  },
  workoutContainer: {
    flex: 1,
    borderRadius: 8,
    margin: 8,
    alignItems: 'center',
    borderColor: 'orange',
    borderWidth: 3,
    flexDirection: 'row',
    height: 50,
    //adjustsFontSizeToFit: true,

  },
  workoutText: {
    fontSize: 15,
    paddingLeft: 5,
    fontWeight: 'bold',
    color: 'orange',
    //adjustsFontSizeToFit: true
  },
  checkBox: {
    flexDirection: 'row',
    flex: .3,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  workoutInput: {
    //flex: 1,
    margin: 5,
    //width: 50,
    height: 35,
    backgroundColor: 'orange',
    borderRadius: 8,
    //fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
    //adjustsFontSizeToFit: true,
    padding: 5
  },
  inputFieldContainer: {
    flex: 1.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    //adjustsFontSizeToFit: true,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

