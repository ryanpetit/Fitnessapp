import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import * as firebase from 'firebase';
import CheckBox from 'react-native-checkbox-heaven';
import { LinearGradient } from 'expo';
import { TextInput } from 'react-native-gesture-handler';

var config = {
    apiKey: "AIzaSyAzfFPi3GPLmpct3Kn-HBBTkjsEbHCY7Ro",
    authDomain: "fitnessapp-e670b.firebaseapp.com",
    databaseURL: "https://fitnessapp-e670b.firebaseio.com",
    projectId: "fitnessapp-e670b",
    storageBucket: "fitnessapp-e670b.appspot.com",
};
firebase.initializeApp(config);



export default class AddWorkouts extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props)

        this.state = {
            workout: '',
            workouts: [],
            checked: false,
        }
    };

    componentDidMount = () => {

        // Get data from firebase
        firebase
            .database()
            .ref()
            .child('Workout')
            .once('value', snapshot => {
                const data = snapshot.val()
                if (snapshot.val()) {
                    const newWorkoutArr = [];
                    Object
                        .keys(data)
                        .forEach(workout => newWorkoutArr.push(data[workout]));
                    this.setState({
                        workouts: newWorkoutArr
                    })
                }
            })

        // Once the data is captured. Register a listener so that if a user adds
        // data to the firebase, we can get the fastest data possible
        firebase
            .database()
            .ref()
            .child("workouts")
            .on("child_added", snapshot => {
                const data = snapshot.val();
                if (data) {
                    this.setState(prevState => ({
                        workouts: [data, ...prevState.workouts]
                    }))
                }
            })
    };

    render() {
        return (
            <LinearGradient style={styles.container} colors={['#304352', '#09203f']}>
                <View style={styles.top}>
                    <Text style={{ color: '#A3B7C3', fontSize: 40, fontWeight: 'bold' }}> Current Workout</Text>
                </View>
                <View style={styles.text_bar} ></View>
                <View style={styles.bottom}>
                    <FlatList
                        style={styles.listView}
                        data={this.state.workouts}
                        renderItem={
                            ({ item }) =>
                                <View style={styles.workoutContainer}>
                                    <View style={styles.checkBox}>
                                        <CheckBox
                                            uncheckedColor='#A3B7C3'
                                            checkedColor='green'
                                            iconSize={35}
                                            iconName='matMix'
                                            onChange={(checked) => this.setState({ checked })}
                                        />
                                    </View>
                                    <View style={{ flex: 1, flexWrap: 'wrap' }}>
                                        <Text style={styles.workoutText}>
                                            {item}
                                        </Text>
                                    </View>
                                    <View style={styles.inputFieldContainer}>

                                        <TextInput
                                            style={styles.workoutInput}
                                            keyboardType='numeric'
                                            placeholder='Sets'
                                            placeholderTextColor='grey'
                                        />
                                        <TextInput
                                            style={styles.workoutInput}
                                            keyboardType='numeric'
                                            placeholder='Reps'
                                            placeholderTextColor='grey'
                                        />
                                        <TextInput
                                            style={styles.workoutInput}
                                            keyboardType='numeric'
                                            placeholder='Weight'
                                            placeholderTextColor='grey'
                                            allowFontScaling={true}
                                        />
                                    </View>
                                </View>
                        }
                    />
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
        margin: 8,
        borderRadius: 15,
        backgroundColor: '#A3B7C3',
        shadowOpacity: 1,
        shadowOffset: { width: 3, height: 4 },
        opacity: .6
    },
    top: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        shadowOpacity: 1,
        shadowOffset: { width: 3, height: 4 },
        opacity: .6
    },
    bottom: {
        flex: 5,
        //backgroundColor: 'blue',
        shadowOpacity: 1,
        shadowOffset: { width: 3, height: 4 },
        opacity: .6

    },
    listView: {
        //backgroundColor: 'gray',
        flex: 1,
        margin: 10,
    },
    workoutContainer: {
        flex: 1,
        borderRadius: 8,
        margin: 8,
        alignItems: 'center',
        borderColor: '#A3B7C3',
        borderWidth: 3,
        flexDirection: 'row',
        height: 50,
    },
    workoutText: {
        fontSize: 15,
        paddingLeft: 5,
        fontWeight: 'bold',
        color: '#A3B7C3',
    },
    checkBox: {
        flexDirection: 'row',
        flex: .3,
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    workoutInput: {
        flex: 1,
        margin: 5,
        width: 50,
        height: 35,
        backgroundColor: '#A3B7C3',
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'white'
    },
    inputFieldContainer: {
        flex: 1.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});
