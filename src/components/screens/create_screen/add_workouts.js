import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import * as firebase from 'firebase';
import CheckBox from 'react-native-checkbox-heaven';
import { LinearGradient } from 'expo';

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
            checked: false
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
                <View style={styles.bottom}>
                    <FlatList

                        style={styles.listView}
                        data={this.state.workouts}
                        renderItem={
                            ({ item }) =>
                                <View style={styles.workoutContainer}>
                                    <CheckBox
                                        uncheckedColor='#A3B7C3'
                                        checkedColor='green'
                                        iconSize={35}
                                        iconName='matMix'
                                        onChange={(checked) => this.setState({ checked })}
                                    />
                                    <Text style={styles.workoutText}>
                                        {item}
                                    </Text>
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
    top: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    bottom: {
        flex: 5,
        //backgroundColor: 'blue',

    },
    listView: {
        //backgroundColor: 'gray',
        flex: 1,
        margin: 10,
    },
    workoutContainer: {
        //backgroundColor: 'white',
        borderRadius: 8,
        margin: 8,
        alignItems: 'center',
        borderColor: '#A3B7C3',
        borderWidth: 3,
        flexDirection: 'row',
        height: 50
    },
    workoutText: {
        fontSize: 20,
        paddingLeft: 30,
        fontWeight: 'bold',
        color: '#A3B7C3'
    }
});





