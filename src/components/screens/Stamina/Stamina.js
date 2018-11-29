import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import { TextInput } from 'react-native-gesture-handler';
import firestore from '../database'
import CheckBox from 'react-native-checkbox-heaven';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';

export default class StaminaScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props)

        this.state = {
            list_workouts: [],
            counter: 0,
            buttonHeight: 0
        }
        this.ref = firestore.collection("Stamina");
    };

    componentWillMount = () => {
        this.ref
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    this.setState({
                        list_workouts: [...this.state.list_workouts, doc.data()]
                    })
                });
            });
        this.ref
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    if (doc.data().checked === true) {
                        this.setState({ counter: this.state.counter += 1 })
                    }
                });
            });

    }

    renderButton = () => {
        this.state.list_workouts.length === this.state.counter;
        if (this.state.list_workouts.length === 0 & this.state.counter === 0)
            return
        if (this.state.counter === this.state.list_workouts.length) {
            this.state.buttonHeight = 70
        }
        if (this.state.counter !== this.state.list_workouts.length) {
            this.state.buttonHeight = 0
        }
    }

    workoutChecked = (item) => {
        this.state.list_workouts.length === this.state.counter;
        if (this.state.counter === this.state.list_workouts.length) {
            this.setState({ buttonHeight: this.state.buttonHeight = 70 })
        }
        if (this.state.counter !== this.state.list_workouts.length) {
            this.setState({ buttonHeight: this.state.buttonHeight = 0 })
        }
        if (item.checked === false) {
            this.ref.doc(item.title).update({ checked: true })
            item.checked = true
            this.state.counter += 1
        }
        else {
            this.ref.doc(item.title).update({ checked: false })
            item.checked = false
            this.state.counter -= 1
        }
    }

    render() {
        return (
            <LinearGradient style={styles.container} colors={['#304352', '#09203f']} >
                <View style={styles.top}>
                    <AntDesign name="left" size={27} color='#A3B7C3' onPress={() => this.props.navigation.goBack()} opacity={0.6} />
                    <Text style={{ color: '#A3B7C3', fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}> Stamina </Text>
                    <AntDesign name="menufold" size={27} color='#A3B7C3' onPress={() => this.props.navigation.openDrawer()} opacity={0.6} />
                </View>
                <View style={styles.text_bar} ></View>
                <View style={styles.bottom}>
                    <FlatList
                        style={styles.listView}
                        data={this.state.list_workouts}
                        //extraData={this.state.list_workouts}
                        renderItem={
                            ({ item }) =>
                                <View style={styles.workoutContainer}>
                                    <View style={{ flex: .8, flexWrap: 'wrap' }}>
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
                                        <View style={styles.checkBox}>
                                            <CheckBox
                                                uncheckedColor='#A3B7C3'
                                                checkedColor='green'
                                                iconSize={35}
                                                iconName='matMix'
                                                checked={item.checked}
                                                onChange={() => this.workoutChecked(item)}
                                            />
                                        </View>
                                        <Ionicons
                                            style={{ margin: 5 }}
                                            name="md-information-circle-outline"
                                            size={35}
                                            color='#A3B7C3'
                                            onPress={() => this.props.navigation.navigate('Workoutinfo', { workout: item })}
                                        />
                                    </View>
                                </View>

                        }
                        keyExtractor={(item) => item.toString()}
                    />
                </View>
                {this.renderButton()}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, { height: this.state.buttonHeight, }]} >
                        <Text style={{ fontSize: 40, color: 'black' }} >Finished</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: .7,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        shadowOpacity: 1,
        shadowOffset: { width: 3, height: 4 },
        opacity: .6,
        flexDirection: 'row',
        margin: 5
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
    bottom: {
        flex: 4,
        shadowOpacity: 1,
        shadowOffset: { width: 3, height: 4 },
        opacity: .6
    },
    listView: {
        flex: 1,
    },
    workoutContainer: {
        flex: 1,
        borderRadius: 8,
        margin: 5,
        alignItems: 'center',
        borderColor: '#A3B7C3',
        borderWidth: 3,
        flexDirection: 'row',
        height: 60,
        //adjustsFontSizeToFit: true,
        padding: 5,

    },
    workoutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#A3B7C3',
        //adjustsFontSizeToFit: true,
    },
    checkBox: {
        margin: 5,
        flexDirection: 'row',
        flex: .8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    workoutInput: {
        height: 40,
        width: 50,
        backgroundColor: '#A3B7C3',
        borderRadius: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'white',
        //adjustsFontSizeToFit: true,
        margin: 5,
    },
    inputFieldContainer: {
        flex: 1.2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        //adjustsFontSizeToFit: true,
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: '20%',
        shadowOpacity: 1,
        shadowOffset: { width: 3, height: 4 },
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: 20,
        width: '60%',
    }
});