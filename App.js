import React, { Component } from 'react';
import { createDrawerNavigator, createAppContainer, DrawerNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from "react-native";

import NavigateApp from "./src/components/navigate";

export default class App extends React.Component {
  render() {
    return <NavigateApp />;
  }
}
