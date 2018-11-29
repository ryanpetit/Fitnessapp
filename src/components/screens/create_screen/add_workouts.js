import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import CheckBox from 'react-native-checkbox-heaven';
import { LinearGradient } from 'expo';
import { TextInput } from 'react-native-gesture-handler';
import firestore from '../database'
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons'
export default class AddWorkouts extends Component {
    static navigationOptions = {
        header: null,
        //drawer nav settings for page, this adds a button to the drawer nav that links to this page
        drawerLabel: 'Create',
        drawerIcon: ({ tintColor }) => (
            <Feather name="play-circle" color='#FFFFFF' />
        )
    };

    constructor(props) {

        this.state = {
            list_workouts: [],
        }
        this.ref = firestore.collection("Workouts");
    };

    componentDidMount = () => {
        this.ref
            .doc("List_Workouts")
            .collection("Arms")
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

    workoutChecked = (item) => {
    }

    render() {
        return (
            <LinearGradient style={styles.container} colors={['#304352', '#09203f']}>
                <View style={styles.top}>
                    <Text style={{ color: '#A3B7C3', fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}> Add Workouts</Text>
                </View>
                <View style={styles.text_bar} ></View>
                <View style={styles.bottom}>
                    <FlatList
                        style={styles.listView}
                        data={this.state.list_workouts}
                        renderItem={
                            ({ item }) =>
                                <View style={styles.workoutContainer}>
                                    <View style={styles.checkBox}>
                                        <CheckBox
                                            uncheckedColor='#A3B7C3'
                                            checkedColor='green'
                                            iconSize={35}
                                            iconName='matMix'
                                            onChange={(checked) => this.workoutChecked(item)}
                                        />
                                    </View>
                                    <View style={{ flex: 1, flexWrap: 'wrap' }}>
                                        <Text style={styles.workoutText}>
                                            {item.Desc}
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
        opacity: .6
    },
    listView: {
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
        adjustsFontSizeToFit: true

    },
    workoutText: {
        fontSize: 15,
        paddingLeft: 5,
        fontWeight: 'bold',
        color: '#A3B7C3',
        adjustsFontSizeToFit: true
    },
    checkBox: {
        flexDirection: 'row',
        flex: .3,
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    workoutInput: {
        //flex: 1,
        margin: 5,
        //width: 50,
        height: 35,
        backgroundColor: '#A3B7C3',
        borderRadius: 8,
        //fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'white',
        adjustsFontSizeToFit: true,
        padding: 5
    },
    inputFieldContainer: {
        flex: 1.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        adjustsFontSizeToFit: true,
    }
});




