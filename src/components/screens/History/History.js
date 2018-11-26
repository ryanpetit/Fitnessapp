import React, { PureComponent } from 'react';
import {AsyncStorage, StyleSheet, Text, View, WebView,StatusBar, ImageBackground, Image } from 'react-native';
import { AntDesign, Feather, MaterialIcons} from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default class HistoryScreen extends PureComponent {
  static navigationOptions = {
    header: null
  }
  async retrieveItem(key) {

    try {
	const retrievedItem = await AsyncStorage.getItem(key);
	const item = JSON.parse(retrievedItem);
	console.log("here is item: " + item);
	return item;
   } catch(err) {
	console.log("error retrieveing item :(.  Error: " + err);
    }
  }

  render() {  
    StatusBar.setBarStyle('light-content',true); 
    const data = [ 1,2,8,3,9,10,3,12,9,3,5];
    const test = this.retrieveItem(1);
    console.log(test);
   
    return ( 
	<ImageBackground source={require('./bg.jpg')} style={imageStyles.background} blurRadius={85}>

	<View style={viewStyles.container}>

		{/* Header View */}
		<View style = {{flex: 0, flexDirection: 'row',justifyContent: 'space-around', marginTop: 33}} opacity={0.6}>
			<AntDesign name="arrowleft" size={17} color='#ffffff' onPress={() => this.props.navigation.goBack()} />
			<Text style={{fontFamily : 'Avenir-Light', color: '#ffffff'}}> Workout History </Text>
			<AntDesign name="menufold" size={17} color='#ffffff' />
		</View>
		
		{/* Calorie Graph */}
		<Text style={textStyles.workoutNameText}> Your Calorie History {"\n"} </Text>
		<AreaChart 
			style={{flex: 4,justifyContent: 'center', height: 40, width: '100%'}}
			data = { data }
			contentInset={{top: 30, bottom: 30}}
			curve = { shape.curveNatural } 
			svg = {{fill: 'rgba(249,133,0,0.8)'}}
		>	
			<Grid />
		</AreaChart>
		
		{/* History */}
		<View style ={{flex: 5, backgroundColor:'#a2a2a2'}}>
			<Text style={textStyles.descriptionHeaderText}> Your Exercise History </Text>
		</View> 

		
      </View> 
      </ImageBackground>

    ); }
}

const imageStyles = StyleSheet.create({
  background: {
    width: '100%', 
    height: '100%'
  }

});

const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  workoutHeader: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4
  },
  
  video: {
    flex: 6,
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10
  },

  description: {
    flex: 7,
    marginTop: 14,
    marginLeft: 8,
    marginRight: 8,
  },

});

const textStyles = StyleSheet.create({
  workoutNameText: {
    flex: .5,
    fontFamily: 'Avenir-Light', 
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'center',
  },
  
  workoutAreaText: {
    fontFamily: 'Avenir-Light', 
    fontSize: 17,
    color: '#ffffff', 
    textAlign: 'center'
  },

  descriptionHeaderText: {
    fontFamily: 'Avenir-Light',
    textAlign: 'center',
    fontSize: 24,
    color: '#ffffff'
  },
  descriptionBodyText: {
    fontFamily: 'Avenir-Light',
    fontSize: 14,
    color: '#ffffff'
  }
});
