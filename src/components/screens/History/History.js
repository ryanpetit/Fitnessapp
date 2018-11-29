import React, { PureComponent } from 'react';
import { AsyncStorage, StyleSheet, Text, View, WebView, StatusBar, ImageBackground, Image } from 'react-native';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import {StackedAreaChart, AreaChart, Grid, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { createDrawerNavigator, DrawerNavigator } from 'react-navigation';

export default class HistoryScreen extends PureComponent {
  static navigationOptions = {
    header: null,
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => (
      <AntDesign
        name="profile" color='#FFFF' />

    ),

  };
  async retrieveItem(key) {

    try {
      const retrievedItem = await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      console.log("here is item: " + item);
      return item;
    } catch (err) {
      console.log("error retrieveing item :(.  Error: " + err);
    }
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
	  const colors = [ 'rgb(137, 255, 172, 0.4)', 'rgb(255, 163, 57, 0.7)' ]
    const data = [0, 1, 2, 1, 2, 3, 2,3,2,3,4,3,4,3,4,5,6,5,6,7,6,7];
    const dt = [
								{		
									cycle: 2,
									run: 0,
								},
								{		
									cycle: 1,
									run: 2,
								},
								{		
									cycle: 3,
									run: 1,
								},
								{		
									cycle: 2,
									run: 2,
								},
								{		
									cycle: 1,
									run: 3,
								},
								{		
									cycle: 3,
									run: 2,
								},
								{		
									cycle: 4,
									run: 3,
								},
								{		
									cycle: 3,
									run: 4,
								},
						]
		const keys = ['cycle', 'run']
								
    const test = this.retrieveItem(1);
    const contentInset = { top: 30, bottom: 30 }

    console.log(test);

    return (
      <ImageBackground source={require('./bg.jpg')} style={imageStyles.background} blurRadius={85}>

        <View style={viewStyles.container}>

          {/* Header View */}
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-around', marginTop: 33 }} >
            <AntDesign name="left" size={17} color='#ffffff' onPress={() => this.props.navigation.goBack()} />
            <Text style={{ fontFamily: 'Avenir-Light', color: '#ffffff' }}> PROFILE </Text>
            <AntDesign name="menufold" size={17} color='#ffffff' onPress={() => this.props.navigation.openDrawer()} />
          </View>

          {/* Photo View */}
					<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around',  marginTop: 7}} >
						<Image source={require('./package.jpg')} style={{width:100, height:100, borderRadius: 50}}/>
					</View>

          {/* Profile View */}
					<View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', marginTop: 35}} >
          	<Text style={textStyles.workoutNameText}> John Snow  </Text>
            <Text style={{ fontFamily: 'Avenir-Light', color: '#ffffff',marginLeft: 100}}> Stamina Workout Plan </Text>
					

						<View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30}}>
							<View style={{flex:1, flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'Avenir-Light', color: '#ffffff', fontSize: 20, marginLeft: 5 }}> 5 </Text>
                <Text style={{ fontFamily: 'Avenir-Light', color: '#ffffff' }}> Workouts </Text>
							</View>

							<View style={{flex:1, flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={{ fontFamily: 'Avenir-Light', color: '#ffffff', fontSize: 20 }}> 7  </Text>
                <Text style={{ fontFamily: 'Avenir-Light', color: '#ffffff' }}> Created </Text>
							</View>

							<View style={{flex:1, flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={{ fontFamily: 'Avenir-Light', color: '#ffffff', fontSize: 20 }}> 213 lbs </Text>
                <Text style={{ fontFamily: 'Avenir-Light', color: '#ffffff' }}> Weight Lost </Text>
							</View>
					</View>
					</View>


					{/* States */}
					<View style={{flex: .3, flexDirection: 'row', justifyContent: 'center'}}>
             <Text style={{ fontFamily: 'Avenir-Light', color: '#ffffff'}}> THIS WEEK </Text>
					</View>

					<View style={{flex: .3, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 45, marginTop: 20}}>

						<View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
						  <Image source={require('./bike.png')} style={{width:40, height: 40}} />
							<View style={{flex:1, flexDirection: 'column' }}>
                <Text style={{ fontFamily: 'Avenir-Light', color: '#ffffff', fontSize: 14 }}> 42 km </Text>
                <Text style={{ fontFamily: 'Avenir-Light', color: '#ffffff' }}> Cyling </Text>
							</View>
						</View>

						<View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
						  <Image source={require('./run.png')} style={{width:40, height: 40}} />
							<View style={{flex:1, flexDirection: 'column'}}>
                <Text style={{ fontFamily: 'Avenir-Light', color: '#ffffff', fontSize: 14 }}> 32 km </Text>
                <Text style={{ fontFamily: 'Avenir-Light', color: '#ffffff' }}> Running </Text>
							</View>
						</View>
					</View>

          {/* Calorie Graph */}
					<View style={{flex: 3, justifyContent:'space-between', flexDirection: 'row', marginTop: 15}}>
              <YAxis
										style={{ marginLeft: 10}}
                    data={ data }
                    contentInset={ contentInset }
                    svg={{
                        fill: 'grey',
												fontSize: 10,
                    }}
                    numberOfTicks={ 10 }
                    formatLabel={ value => `${value}km` }
                />
             <StackedAreaChart
                    style={ { flex: 1, marginLeft: 17, justifyCOntent: 'center' }}
                    contentInset={ { top: 30, bottom: 30 } }
                    data={ dt }
                    keys={ keys }
                    colors={ colors }
                    curve={ shape.curveNatural }
							>

            <Grid />
            </StackedAreaChart>
					</View>
        </View>
      </ImageBackground>

    );
  }
}

const imageStyles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },

  icon: {
    width: 24,
    height: 24,
  },

});

const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  workoutHeader: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },

  video: {
    flex: 6,
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 40
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
