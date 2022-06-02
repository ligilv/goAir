import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '../components/Icon';
import Profile from '../screens/profile';
import Settings from '../screens/settings';
import Home from '../screens/home';
import {colors} from '../constants/colors';
const BottomTab = () => {
  const customTabBarStyle = {
    activeTintColor: '#0091EA',
    inactiveTintColor: 'gray',
    style: {backgroundColor: 'white'},
  };
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home"
      activeColor="#fff"
      tabBarOptions={customTabBarStyle}
      shifting="false">
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
        component={Home}
      />

      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: 'Fly',
          tabBarIcon: ({color}) => (
            <View
              style={{
                bottom: 10,
                backgroundColor: colors.avBlue,

                // position: 'absolute',
                // bottom: 0, // space from bottombar
                height: 50,
                width: 50,
                borderRadius: 50 / 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: colors.avTealGreen,
                borderWidth: 2,
              }}>
              <Icon
                from="ionicons"
                name="paper-plane"
                color={color}
                size={35}
              />
            </View>
          ),
        }}
        component={Settings}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon from="materialIcons" name="person" color={color} size={26} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
