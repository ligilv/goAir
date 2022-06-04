import {StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import React, { useEffect } from 'react';
import {avPlane, avlogopng} from '../../assets/index';
import {colors} from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
const Splash = () => {
  const navigation=useNavigation()
  useEffect(()=>{
    setTimeout(()=>{

      navigation.replace('Login')
    },2000)
  },[])
  return (
    <View style={styles.container}>
      <Image source={avlogopng} style={styles.image} resizeMode={'contain'} />
      <ActivityIndicator size="large" color={colors.avTealGreen} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.avBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
