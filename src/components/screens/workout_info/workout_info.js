import React, { Component } from 'react';
import { View, Text, WebView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons'

export default class WorkoutInfo extends Component {
	static navigationOptions = {
		header: null
	};

	tester = (workout) => {
		if (workout == "Barbell Lunge") {
			return (
				<Text>This is barbell lunge</Text>
			);
		}
		else if (workout == "Barbell Lunge") {
			return (
				<Text>This is barbell lunge</Text>
			);
		}
	}

	render() {
		const workout = this.props.navigation.getParam('workout');
		const index = this.props.navigation.getParam('index');
		//console.log(list_workouts[0].Desc);
		return (
			<LinearGradient style={{ flex: 1, }} colors={['#434343', '#000000']}>
				<View style={styles.top}>
					<AntDesign name="left" size={35} color='orange' onPress={() => this.props.navigation.navigate('Premades')} opacity={0.6} />
					<Text style={{ color: 'orange', fontSize: 40, fontWeight: 'bold' }}>{workout.title}</Text>
					<AntDesign name="menufold" size={35} color='orange' onPress={() => this.props.navigation.openDrawer()} opacity={0.6} />
				</View>
				<View style={styles.text_bar} ></View>
				<View style={styles.url}>
					<WebView url={workout.url} />
				</View>
				<View style={styles.info}>
					<Text style={{ color: 'orange', fontSize: '30%', fontWeight: 'bold' }}> Description </Text>
					<Text style={{
						color: 'orange', fontSize: '15%', justifyContent: 'center', flexWrap: 'wrap',
						padding: 10, textAlign: 'center'
					}}>{workout.desc}</Text>
				</View>
			</LinearGradient >
		);
	}
}

const styles = StyleSheet.create({
	top: {
		flex: 1,
		paddingTop: 50,
		shadowOpacity: 1,
		shadowOffset: { width: 3, height: 4 },
		opacity: .6,
		justifyContent: 'space-around',
		alignItems: 'center',
		adjustsFontSizeToFit: true,
		flexDirection: 'row'
	},
	text_bar: {
		flex: .1,
		margin: 8,
		borderRadius: 15,
		backgroundColor: 'orange',
		shadowOpacity: 1,
		shadowOffset: { width: 3, height: 4 },
		opacity: .6
	},
	url: {
		flex: 2.5,
		margin: 10,
	},
	info: {
		flex: 2,
		justifyContent: 'flex_start',
		alignItems: 'center',
		shadowOpacity: 1,
		shadowOffset: { width: 3, height: 4 },
		opacity: .6,
	}
})