import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import { TextInput } from 'react-native-gesture-handler';
import firestore from '../database'

export default class StaminaScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props)
        this.state = {
            list_workouts: [],
            checked: false,
            workoutChecked: []
        }
        this.ref = firestore.collection("Stamina");
    };

    componentDidMount = () => {
        this.ref
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    //console.log(doc.data());
                    this.setState({
                        list_workouts: [...this.state.list_workouts, doc.data()]
                    })
                });
            });
    }

    render() {
        return (
            <LinearGradient style={styles.container} colors={['#304352', '#09203f']}>
                <View style={styles.top}>
                    <Text style={{ color: '#A3B7C3', fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}> Stamina </Text>
                </View>
                <View style={styles.text_bar} ></View>
                <View style={styles.bottom}>
                    <FlatList
                        style={styles.listView}
                        data={this.state.list_workouts}
                        renderItem={
                            ({ item, index }) =>
                                <View style={styles.workoutContainer}>
                                    <View style={{ flex: 1, flexWrap: 'wrap' }}>
                                        <Text style={styles.workoutText}>
                                            {item.title}
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
                                        <Ionicons
                                            style={{ margin: 5 }}
                                            name="md-information-circle-outline"
                                            size={35}
                                            color='#A3B7C3'
                                            //onPress={() => { this.props.navigation.navigate('Workout', { listWorkout: this.state.list_workouts }) }}
                                            onPress={() => this.props.navigation.navigate('Workoutinfo', { workout: item })}
                                        />
                                    </View>
                                </View>
                        }
                        keyExtractor={(item, index) => index.toString()}
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
        opacity: .6,
    },
    bottom: {
        flex: 5,
        shadowOpacity: 1,
        shadowOffset: { width: 3, height: 4 },
        opacity: .6,
    },
    listView: {
        flex: 1,
        margin: 10,
    },
    workoutContainer: {
        flex: 1,
        borderRadius: 8,
        margin: 8,
        borderColor: '#A3B7C3',
        borderWidth: 3,
        height: 60,
        //adjustsFontSizeToFit: true,
        flexDirection: 'row'
    },
    workoutText: {
        flex: 2,
        fontSize: 15,
        paddingLeft: 5,
        fontWeight: 'bold',
        color: '#A3B7C3',
        //adjustsFontSizeToFit: true,
    },
    workoutInput: {
        margin: 5,
        height: 40,
        backgroundColor: '#A3B7C3',
        borderRadius: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'white',
        //adjustsFontSizeToFit: true,
        padding: 5,
        textAlign: 'center'
    },
    inputFieldContainer: {
        flex: 1.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //adjustsFontSizeToFit: true,
    }
});
