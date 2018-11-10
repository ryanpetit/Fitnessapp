import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, AppRegistry} from 'react-native';
import { LinearGradient } from 'expo'
import { scale } from 'react-native-size-matters';
import { withNavigation } from 'react-navigation'
import {ListItem, List, Icon,  Left, Body, Right, Switch, Item, Container, Content, Input} from 'native-base'

export default class StabilityScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {

        var workouts = [
            'Workout 1',
            'Workout 2',
            'Workout 3',
            'Workout 4',
            'Workout 5',
            'Workout 6',
            'Workout 7',
            'Workout 8',
            'Workout 9',
            'Workout 10',
            'Workout 11',
            'Workout 12',
            'Workout 13',
            'Workout 14',
            'Workout 15',
            'Workout 16',
            'Workout 17',
        ];

        var sets = [
            '10',
        ];

        var reps = [
            '3',
        ];

        return (
            <LinearGradient style={styles.container} colors={['#304352', '#09203f']}>
                <View style={styles.top}>
                    <Text adjustsFontSizeToFitWidth={true} numberOfLines={1} style={{ color: '#A3B7C3', fontSize: scale(30), fontWeight: 'bold', textAlign: "center", width: '100%' }}>Stability Workout</Text>
                </View>
                
                <ScrollView style = {{flex: 1}}>
                    <View style={styles.workout}>
                        <List dataArray={workouts}
                            renderRow={(workouts) =>
                                <ListItem  noIndent icon >

                                    <Body>
                                        <Text style={{fontWeight: 'bold'}}>{workouts}</Text>
                                    </Body>
                                    <Right>
                                        
                                        <Text style={{fontWeight: 'bold'}}>Sets:</Text>
                                        <Text> 3 </Text>
                                        

                                        <Text style={{fontWeight: 'bold'}}>Reps:</Text>
                                        <Text> 10 </Text>
                                        

                                        <Text style={{fontWeight: 'bold'}}>Weight: </Text>
                                        <Item regular style={{width: 40}}>
                                                <Input />
                                        </Item>
                                        
                                        <Icon  
                                            active name="ios-information-circle" 
                                            onPress={()=>{this.props.navigation.navigate('Premadescreen')}}


                                            
                                        >
                                        </Icon>
                                    </Right>

                                 
                                </ListItem>
                            }>
                        </List>
                    </View>


                    



                </ScrollView>
                    
                    

               
            </LinearGradient >
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        height: '15%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        shadowOpacity: 1,
        shadowOffset: { width: 3, height: 4 }
    },
    text_bar: {
        height: 20,
        margin: 20,
        borderRadius: 15,
        backgroundColor: '#A3B7C3',
        shadowOpacity: 1,
        shadowOffset: { width: 3, height: 4 }
    },
    bottom: {
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 40,
    },
    button: {
        width: '50%',
        height: '40%',
        padding: 10,
        borderColor: 'black',
        shadowOffset: { width: 2, height: 5 },
    },
    button_inner: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'center',
        shadowOpacity: 1,
        shadowOffset: { width: 3, height: 4 },
        backgroundColor: 'rgba(24, 229, 240, 0.25)',
        borderRadius: 30,
        paddingBottom: 10
    },

    workout:{

        flex: 1,
        backgroundColor: 'white',
        opacity: 0.4,
        
    }
});