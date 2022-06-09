import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {logo, avlogopng} from '../../assets';
import Icon from '../../components/Icon';
import { colors } from '../../constants/colors';
const Header = () => {
  return (
    <View style={styles.container}>
      
<Text style={{fontSize:25, fontWeight:'800'}}>Go. Air.</Text>     
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: colors.avTealGreen,
    justifyContent: 'center',  
  alignItems:'center'},
});
