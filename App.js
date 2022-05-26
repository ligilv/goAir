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


 

const App=() => {
  const isDarkMode = useColorScheme() === 'dark';

  

  return (
    <SafeAreaView >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>iwenf</Text>
      <NavigationContainer>

      {/* <Icon
                  from={'antDesign'}
                  name="caretup"
                  size={15}
                  color="green"
                  style={{paddingHorizontal: 10}}
                /> */}
      <FlashMessage position="top" />
      </NavigationContainer>
 
    </SafeAreaView>
  );
};



export default App;
