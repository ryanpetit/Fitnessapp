import React, { Component } from "react";
import MainScreen from "./screens/main_screen";
import CreateScreen from "./screens/create_screen/create_mainscreen";
import SaveScreen from "./screens/save_screen/save_mainscreen";
import ProfileScreen from "./screens/profile_screen/profile_mainscreen";
import PremadeScreen from "./screens/premade_screen/premade_mainscreen";
import StrengthScreen from "./screens/Strength/Strength";
import StabilityScreen from "./screens/Stability/Stability";
import WorkoutInfo from './screens/workout_info/workout_info';
import HistoryScreen from './screens/History/History';
import AddWorkouts from './screens/create_screen/add_workouts';
import StaminaScreen from './screens/Stamina/Stamina';
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

const mainscreen = createStackNavigator({
  Mainscreen: MainScreen
})
const createscreen = createStackNavigator({
  Createscreen: CreateScreen
})
const premadescreen = createStackNavigator({
  Premadescreen: PremadeScreen
})
const savescreen = createStackNavigator({
  Savescreen: SaveScreen
})
const profilescreen = createStackNavigator({
  Profilescreen: ProfileScreen
})

class Hidden extends React.Component {
  render() {
    return null;
  }
}

//Drawer navigation creator. ANy screens that you want to have links to in the drawer nav will be put in here
export default MyDrawerNavigator = createDrawerNavigator({
  Home: mainscreen,
  Premades: premadescreen,
  Create: createscreen,
  Saved: savescreen,
  Profile: profilescreen,
  Strengthscreen: {
    screen: StrengthScreen,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  },
  Workoutinfo: {
    screen: WorkoutInfo,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  },
  Historyscreen: {
    screen: HistoryScreen,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  },
  Addworkouts: {
    screen: AddWorkouts,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  },
  Staminascreen: {
    screen: StaminaScreen,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  },
  Stabilityscreen: {
    screen: StabilityScreen,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  },
}, {
    drawerPosition: 'right',
    drawerBackgroundColor: 'orange',
    drawerWidth: 200,
    backBehavior: 'none',


  });
