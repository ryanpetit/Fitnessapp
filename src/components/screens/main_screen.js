import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo'
import { scale } from 'react-native-size-matters';
import { withNavigation } from 'react-navigation'
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons'

// Gradients form https://webgradients.com

class MainScreen extends React.Component {
  static navigationOptions = {
    header: null,
    //FOR DRAWER NAVIGATION (whole drawerlabel) (this puts a link to this page in the drawer nav sidebar when it slides out, determines the text it uses and the icon)
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Feather
        name="home" color='#FFFF' />
    ),
  }
  render() {
    return (
      //<LinearGradient style={styles.container} colors={['#005A89', '#168A78']}>
      <LinearGradient style={styles.container} colors={['#304352', '#09203f']}>

        {/* Top of screen */}
        <View style={styles.top}>
          <Text adjustsFontSizeToFitWidth={true} numberOfLines={1} style={{ color: '#A3B7C3', fontSize: scale(50), fontWeight: 'bold', textAlign: "center", width: '100%' }}>Categories</Text>
          <AntDesign name="menufold" size={27} color='#A3B7C3' onPress={() => this.props.navigation.openDrawer()} opacity={0.6} />
        </View>

        {/* Middle of screen */}
        <View style={styles.text_bar} ></View>

        {/* Bottom of screen */}

        <View style={{ flex: 3, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', paddingBottom: 10 }}>
          <TouchableOpacity
            style={styles.button_inner}
            onPress={() => { this.props.navigation.navigate('Createscreen') }}>
            <MaterialCommunityIcons name="plus-box-outline" size={100} color="#A3B7C3" />
            <Text style={{ color: '#A3B7C3', fontSize: scale(30), fontWeight: 'bold' }}> Create </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_inner}
            onPress={() => { this.props.navigation.navigate('Premadescreen') }}>
            <Feather name="play-circle" size={95} color="#A3B7C3" />
            <Text style={{ color: '#A3B7C3', fontSize: scale(30), fontWeight: 'bold', paddingTop: 10 }}> Premade </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 3, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', paddingTop: 10 }}>
          <TouchableOpacity
            style={styles.button_inner}
            onPress={() => { this.props.navigation.navigate('Savescreen') }}>
            <Feather name="save" size={100} color="#A3B7C3" />
            <Text style={{ color: '#A3B7C3', fontSize: scale(30), fontWeight: 'bold' }}> Save </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_inner}
            onPress={() => { this.props.navigation.navigate('History') }}>
            <AntDesign name="profile" size={95} color="#A3B7C3" />
            <Text style={{ color: '#A3B7C3', fontSize: scale(30), fontWeight: 'bold', paddingTop: 10 }}> Profile </Text>
          </TouchableOpacity>
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 4 },
    opacity: .6,
    flexDirection: 'row',
    padding: 30,
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
  button_inner: {
    height: '70%',
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 4 },
    //backgroundColor: 'rgba(24, 229, 240, 0.25)',
    backgroundColor: 'rgba(104, 104, 104, 0.2)',
    borderRadius: 30,
    opacity: .6,
  },
});
