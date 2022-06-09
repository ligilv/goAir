import {StyleSheet, Text, View, Image, ActivityIndicator, ImageBackground} from 'react-native';
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
      <ImageBackground
        source={avPlane}
       
        style={{
         
          // backgroundColor: '#e6e6e6',
          flex: 1,
          // // backgroundColor: 'black',
          // height: '100%',
          paddingTop:250,
          justifyContent: 'center',
          alignItems:'center'

        }}><View style={{backgroundColor:colors.avTealGreen, width:100, borderRadius:100/2}}>

      <ActivityIndicator size="large" color={colors.frostWhite}/>
        </View>

        </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  
  
});
