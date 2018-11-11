import React , { Component }  from 'react';
import {AsyncStorage, Button, StyleSheet, Text, View, WebView,StatusBar, ImageBackground } from 'react-native';
import { AntDesign, Feather, MaterialIcons} from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

export default class WorkoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
	key: "1",
	val: 1
    }
  }

  static navigationOptions = {
    header: null
  }
	

  async storeRoutine(key, routine) {
	//wait for promise to be resolved
	try {
	    var itemJson = await AsyncStorage.setItem(key, JSON.stringify(routine));
	    return itemJson
	}

	catch(error) { 
	   console.log("Error storing the exercise" + error);
	   console.log(key);
	   console.log(routine);
	}
  }

  async retrieveItem(key) {
    try {
	const retrievedItem = await AsyncStorage.getItem(key);
	const item = JSON.parse(retrievedItem);
	return item
    }
    catch(error) {
	console.log("Error retrieving. Error: " + error.message)
   }
 }

	
  render() {  
    StatusBar.setBarStyle('light-content',true); 
    return ( 
	<ImageBackground source={require('./bg.jpg')} style={imageStyles.background} blurRadius={85}>

	<View style={viewStyles.container}>

		{/* Header View */}
		<View style = {{flex: 0, flexDirection: 'row',justifyContent: 'space-around', marginTop: 33}} opacity={0.6}>
			<AntDesign name="arrowleft" size={17} color='#ffffff' />
			<Text style={{fontFamily : 'Avenir-Light', color: '#ffffff'}}> Daily Workout Routine </Text>
			<AntDesign name="menufold" size={17} color='#ffffff' />
		</View>

		<Swiper dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 5, height: 5, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
		activeDot={<View style={{backgroundColor: '#fff', width: 5, height: 5, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
		paginationStyle={{ bottom: 50}} loop={false}>

			<View style={viewStyles.container}>

				{/* WORKOUT TYPE VIEW  */}
				<View style ={viewStyles.workoutHeader}> 
					<Text style={textStyles.workoutNameText}>Front Biceps{"\n"}
						<Text style={textStyles.workoutAreaText}>Strength Endurance</Text>
					</Text>
				</View>

				{/* VIDEO VIEW  */}
				<View style={viewStyles.video}>
					<WebView 
						javaScriptEnabled={true}
						source={{uri: 'https://www.youtube.com/embed/l0gDqsSUtWo?showinfo=0;' }}
					/>
				</View>

				{/* DESCRIPTION VIEW  */}
				<View style={viewStyles.description}>
					<Text style={textStyles.descriptionHeaderText}>	WARM UP </Text>
					<Text style={textStyles.descriptionBodyText}> {"\n"} • Jog for 15 minutes {"\n"}{"\n"} • Bench Press for 10 minutes{"\n"}{"\n"} • 10 reps of situps </Text>
				
				{/* Log Workout  */}
					<Button 
					 	title = 'Log Workout'
						color =  '#ffffff'
						ButtonStyle = {{ backgroundColor: '#ff6200'}}
						onPress={() => this.storeRoutine(this.state.key,this.state.val)}
					/>
					
				</View>
			</View>

			<View style={viewStyles.container}>

				{/* WORKOUT TYPE VIEW  */}
				<View style ={viewStyles.workoutHeader}> 
					<Text style={textStyles.workoutNameText}>Back Biceps{"\n"}
						<Text style={textStyles.workoutAreaText}>Strength Endurance</Text>
					</Text>
				</View>

				{/* VIDEO VIEW  */}
				<View style={viewStyles.video}>
					<WebView 
						javaScriptEnabled={true}
						source={{uri: 'https://www.youtube.com/embed/YdB1HMCldJY?showinfo=0;' }}
					/>
				</View>

				{/* DESCRIPTION VIEW  */}
				<View style={viewStyles.description}>
					<Text style={textStyles.descriptionHeaderText}>	REPS </Text>
					<Text style={textStyles.descriptionBodyText}> {"\n"} • 2 x 40 sets of Pushups {"\n"}{"\n"} • 2 Minute Break{"\n"}{"\n"} • 5 x 20 sets of Pull Ups</Text>
				</View>
			</View>

			<View style={viewStyles.container}>

				{/* WORKOUT TYPE VIEW  */}
				<View style ={viewStyles.workoutHeader}> 
					<Text style={textStyles.workoutNameText}>ForeArms{"\n"}
						<Text style={textStyles.workoutAreaText}>Strength Endurance</Text>
					</Text>
				</View>

				{/* VIDEO VIEW  */}
				<View style={viewStyles.video}>
					<WebView 
						javaScriptEnabled={true}
						source={{uri: 'https://www.youtube.com/embed/6EqI5V8AUp8?showinfo=0;' }}
					/>
				</View>

				{/* DESCRIPTION VIEW  */}
				<View style={viewStyles.description}>
					<Text style={textStyles.descriptionHeaderText}>	REPS </Text>
					<Text style={textStyles.descriptionBodyText}> {"\n"} • 2 x 40 sets Weights{"\n"}{"\n"} • 4 Minute Break{"\n"}{"\n"} • 5 Birpies</Text>
				</View>
			</View>

		</Swiper>
      </View> 
      </ImageBackground>

    );
  }
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
