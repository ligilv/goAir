import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '../components/Icon';
import Profile from '../screens/profile';
import BookFlight from '../screens/bookflight';
import Home from '../screens/home';
import {colors} from '../constants/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LocationModal from '../components/locationModal';

const BookingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Booking" component={BookFlight} />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <Stack.Screen name="LocationModal" component={LocationModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
const BottomTab = () => {
  const customTabBarStyle = {
    activeTintColor: colors.avTealGreen,
    inactiveTintColor: 'gray',
    headerShown: false,
  };
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: colors.avTealGreen,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}
      initialRouteName="Bookflight"
      activeColor="#fff"
      // tabBarOptions={customTabBarStyle}
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
        name="Bookflight"
        options={{
          tabBarLabel: 'Fly',
          tabBarIcon: ({color}) => (
            <View
              style={{
                bottom: 10,
                backgroundColor: colors.offWhite,

                // position: 'absolute',
                // bottom: 0, // space from bottombar
                height: 50,
                width: 50,
                borderRadius: 50 / 2,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 1,
              }}>
              <Icon
                from="ionicons"
                name="airplane-sharp"
                color={color}
                size={35}
              />
            </View>
          ),
        }}
        component={BookingStack}
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
