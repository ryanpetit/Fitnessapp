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

  }
  render() {
    return (
      //<LinearGradient style={styles.container} colors={['#005A89', '#168A78']}>
      <LinearGradient style={styles.container} colors={['#434343', '#000000']}>


        {/* Top of screen */}
        <View style={styles.top}>
          <AntDesign style={{ alignItems: 'flex-end', justifyContent: 'flex-end', paddingLeft: '90%', }} name="menufold" size={35} color='orange' onPress={() => this.props.navigation.openDrawer()} opacity={0.6} />

          <Text adjustsFontSizeToFitWidth={true} numberOfLines={1} style={{ color: 'orange', fontSize: scale(45), fontWeight: 'bold', textAlign: "center", width: '100%', marginTop: 30 }}>PWW Fitness</Text>
        </View>

        {/* Middle of screen */}
        <View style={styles.text_bar} ></View>

        {/* Bottom of screen */}

        <View style={{ flex: 3, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', paddingBottom: 10 }}>
          <TouchableOpacity
            style={styles.button_inner}
            //onPress={() => { this.props.navigation.navigate('Createscreen') }}>
            onPress={() => { alert("Feature Coming Soon") }}>
            <MaterialCommunityIcons name="plus-box-outline" size={100} color="orange" />
            <Text style={{ color: 'orange', fontSize: scale(30), fontWeight: 'bold' }}> Create </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_inner}
            onPress={() => { this.props.navigation.navigate('Premadescreen') }}>
            <Feather name="play-circle" size={95} color="orange" />
            <Text style={{ color: 'orange', fontSize: scale(30), fontWeight: 'bold', paddingTop: 10 }}> Premade </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 3, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around', paddingTop: 10 }}>
          <TouchableOpacity
            style={styles.button_inner}
            //onPress={() => { this.props.navigation.navigate('Savescreen') }}>
            onPress={() => { alert("Feature Coming Soon") }}>
            <Feather name="save" size={100} color="orange" />
            <Text style={{ color: 'orange', fontSize: scale(30), fontWeight: 'bold' }}> Save </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_inner}
            onPress={() => { this.props.navigation.navigate('Historyscreen') }}>
            <AntDesign name="profile" size={95} color="orange" />
            <Text style={{ color: 'orange', fontSize: scale(30), fontWeight: 'bold', paddingTop: 10 }}> Profile </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

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
    alignItems: 'center',
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 4 },
    opacity: .6,
    flexDirection: 'column',
    padding: 30,
  },
  text_bar: {
    flex: .2,
    margin: 8,
    borderRadius: 15,
    backgroundColor: 'orange',
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
