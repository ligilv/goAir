import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Home from '../screens/home';
import Settings from '../screens/bookflight';
import Profile from '../screens/profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from './bottomTab';
import Splash from '../screens/splash';
const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Splash" component={Splash} />

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator screenOptions={{headerShown: false}}>
//       <Tab.Screen name="Home" component={MainStack} />
//       <Tab.Screen name="Settings" component={Settings} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// }
const RootSTack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Auth">
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="HomeStack" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default RootSTack;
