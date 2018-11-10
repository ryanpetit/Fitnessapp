import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView,StatusBar, ImageBackground, Image } from 'react-native';
import { AntDesign, Feather, MaterialIcons} from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

export default class HistoryScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {  
    StatusBar.setBarStyle('light-content',true); 
    return ( 
	<ImageBackground source={require('./bg.jpg')} style={imageStyles.background} blurRadius={85}>

	<View style={viewStyles.container}>

		{/* Header View */}
		<View style = {{flex: 0, flexDirection: 'row',justifyContent: 'space-around', marginTop: 33}} opacity={0.6}>
			<AntDesign name="arrowleft" size={17} color='#ffffff' />
			<Text style={{fontFamily : 'Avenir-Light', color: '#ffffff'}}> Workout History </Text>
			<AntDesign name="menufold" size={17} color='#ffffff' />
		</View>
		
		{/* Calorie Graph */}
		<View style = {{flex: 1, flexDirection: 'row',justifyContent: 'center',flexWrap: 'wrap'}}>
			<Text style={textStyles.workoutNameText}> Your Calorie History </Text>
			<Image source={require('./graph.jpg')} style={{width:310,height:220}} />
		</View>
		
		{/* History */}
		<View style ={{flex: 1, backgroundColor:'#a2a2a2'}}>
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
