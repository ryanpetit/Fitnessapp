import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { createDrawerNavigator, DrawerNavigator} from 'react-navigation';

class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./chats-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {/*other code here*/}
            <Text>Home Page!</Text>
            <Button 
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
                title="DrawerOpen"
            />
        </View>
      );
    }
  }
  
  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./notif-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            
            <Button 
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
                title="DrawerOpen"
            />

        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  
  const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  });
  


export default DrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
},
   {
        drawerPosition: 'right',
        initialRouteName: 'Home',
        drawerBackgroundColor: 'orange',
        drawerWidth: 200,

   });


    

  //const MyApp = createAppContainer(MyDrawerNavigator);