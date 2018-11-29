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

/*export default class NavigateApp extends Component {
  render() {
    return <NavigateScreens />;
  }
}*/

const NavigateScreens = createStackNavigator({
  Mainscreen: MainScreen,
  Addworkouts: AddWorkouts,
  Createscreen: CreateScreen,
  Premadescreen: PremadeScreen,
  Savescreen: SaveScreen,
  Profilescreen: ProfileScreen,
  Strengthscreen: StrengthScreen,
  Stabilityscreen: StabilityScreen,
  Staminascreen: StaminaScreen,
  Workoutinfo: WorkoutInfo,
  History: HistoryScreen,
});

//Drawer navigation creator. ANy screens that you want to have links to in the drawer nav will be put in here
export default MyDrawerNavigator = createDrawerNavigator({
  /*Top: {
    screen: NavigateScreens,
  },*/
  //Top: NavigateScreens,
  Home: NavigateScreens,
  Premades: PremadeScreen,
  Create: CreateScreen,
  Saved: SaveScreen,
  Profile: HistoryScreen,
}, {
    drawerPosition: 'right',
    drawerBackgroundColor: '#304352',
    drawerWidth: 200,
  });

