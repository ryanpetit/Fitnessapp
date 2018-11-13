import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, AppRegistry} from 'react-native';
import { LinearGradient } from 'expo'
import { scale } from 'react-native-size-matters';
import { withNavigation } from 'react-navigation'
import {ListItem, List, Icon,  Left, Body, Right, Switch, Item, Container, Content, Input} from 'native-base'

export default class StaminaScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {

        var exercises = [
            'Exercise 1',
            'Exercise 2',
            'Exercise 3',
            'Exercise 4',
            'Exercise 5',
            'Exercise 6',
            'Exercise 7',
            'Exercise 8',
            'Exercise 9',
            'Exercise 10',
            'Exercise 11',
            'Exercise 12',
            'Exercise 13',
            'Exercise 14',
            'Exercise 15',
            'Exercise 16',
            'Exercise 17',
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
                    <Text adjustsFontSizeToFitWidth={true} numberOfLines={1} style={{ color: '#A3B7C3', fontSize: scale(30), fontWeight: 'bold', textAlign: "center", width: '100%' }}>Stamina Workout</Text>
                </View>
                
                <ScrollView style = {{flex: 1}}>
                    <View style={styles.workout}>
                        <List dataArray={exercises}
                            renderRow={(exercises) =>
                                <ListItem  noIndent icon >

                                    <Body>
                                        <Text style={{fontWeight: 'bold'}}>{exercises}</Text>
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
                                            onPress={()=>{this.props.navigation.navigate('Workout')}}


                                            
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
