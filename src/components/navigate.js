import React, { Component } from 'react';
import MainScreen from './screens/main_screen'
import CreateScreen from './screens/create_screen/create_mainscreen'
import SaveScreen from './screens/save_screen/save_mainscreen'
import ProfileScreen from './screens/profile_screen/profile_mainscreen'
import PremadeScreen from './screens/premade_screen/premade_mainscreen';
import StrengthScreen from './screens/Strength/Strength';
import { createStackNavigator } from 'react-navigation'


export default class NavigateApp extends Component {
    render() {
        return (
            <NavigateScreens />
        );
    }
}

const NavigateScreens = createStackNavigator({
    Strengthscreen: StrengthScreen,
    Mainscreen: MainScreen,
    Createscreen: CreateScreen,
    Premadescreen: PremadeScreen,
    Savescreen: SaveScreen,
    Profilescreen: ProfileScreen
    
})