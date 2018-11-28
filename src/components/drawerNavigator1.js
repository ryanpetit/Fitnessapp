import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { createDrawerNavigator, DrawerNavigator} from 'react-navigation';



  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  
  const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: MainScreen,
    },
    Notifications: {
      screen: HistoryScreen,
    },
  });
  


export default DrawerNavigator({
  Home: {
    screen: MainScreen,
  },
  Notifications: {
    screen: HistoryScreen,
  },
},
   {
        drawerPosition: 'right',
        initialRouteName: 'Home',
        drawerBackgroundColor: 'orange',
        drawerWidth: 200,

   });


    

  //const MyApp = createAppContainer(MyDrawerNavigator);