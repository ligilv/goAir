/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Icon from './src/components/Icon';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import RootSTack from './src/navigation';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {/* <Icon
          from={'antDesign'}
          name="caretup"
          size={15}
          color="green"
          style={{paddingHorizontal: 10}}
        /> */}
        <RootSTack />
        <FlashMessage position="top" />
      </NavigationContainer>
      {/* <Login /> */}
      {/* <Signup /> */}
    </SafeAreaView>
  );
};

export default App;
