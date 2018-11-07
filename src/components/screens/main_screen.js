import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo'
import { scale } from 'react-native-size-matters';
import { withNavigation } from 'react-navigation'

class MainScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <LinearGradient style={styles.container} colors={['#005A89', '#168A78']}>
                <View style={styles.top}>
                    <Text adjustsFontSizeToFitWidth={true} numberOfLines={1} style={{ color: '#A3B7C3', fontSize: scale(60), fontWeight: 'bold', textAlign: "center", width: '100%' }}>Categories</Text>
                </View>
                <View style={styles.text_bar} ></View>
                <View style={styles.bottom}>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.button_inner}
                            onPress={() => { this.props.navigation.navigate('Createscreen') }}>
                            <Text style={{ color: '#A3B7C3', fontSize: scale(30), fontWeight: 'bold' }}> Create </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.button_inner}
                            onPress={() => { this.props.navigation.navigate('Premadescreen') }}>
                            <Text style={{ color: '#A3B7C3', fontSize: scale(30), fontWeight: 'bold' }}> Premade </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.button_inner}
                            onPress={() => { this.props.navigation.navigate('Savescreen') }}>
                            <Text style={{ color: '#A3B7C3', fontSize: scale(30), fontWeight: 'bold' }}> Save </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.button_inner}
                            onPress={() => { this.props.navigation.navigate('Profilescreen') }}>
                            <Text style={{ color: '#A3B7C3', fontSize: scale(30), fontWeight: 'bold' }}> Profile </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </LinearGradient >
        );
    }
}

export default withNavigation(MainScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        height: '30%',
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
});