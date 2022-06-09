import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {logo, avlogopng} from '../../assets';
import Icon from '../../components/Icon';
import { colors } from '../../constants/colors';
const Header = () => {
  return (
    <View style={styles.container}>
      {/* <Icon
        from="materialIcons"
        name="menu"
        size={15}
        color="green"
        style={{paddingHorizontal: 10}}
      /> */}
      <Image source={avlogopng} style={{width: 120, height: 50,}} />
      {/* <Icon
        from={'materialIcons'}
        name="home"
        size={15}
        color="green"
        style={{paddingHorizontal: 10}}
      /> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: colors.avBlue,
    justifyContent: 'center',
  },
});
