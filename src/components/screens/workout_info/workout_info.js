import React, { Component } from 'react';
import { View, Text, WebView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { StackNavigator } from 'react-navigation';

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
			<LinearGradient style={{ flex: 1, }} colors={['#304352', '#09203f']}>
				<View style={styles.top}>
					<Text style={{ color: '#A3B7C3', fontSize: '15%', fontWeight: 'bold' }}>Daily Workout Routine</Text>
					<Text style={{ color: '#A3B7C3', fontSize: 40, fontWeight: 'bold' }}>{workout.title}</Text>
				</View>
				<View style={styles.text_bar} ></View>
				<View style={styles.url}>
					<WebView url={workout.url} />
				</View>
				<View style={styles.info}>
					<Text style={{ color: '#A3B7C3', fontSize: '30%', fontWeight: 'bold' }}> Description </Text>
					<Text style={{
						color: '#A3B7C3', fontSize: '15%', justifyContent: 'center', flexWrap: 'wrap',
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
		justifyContent: 'center',
		alignItems: 'center',
		adjustsFontSizeToFit: true,
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