import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {logo, avlogopng} from '../../assets';
import Icon from '../../components/Icon';
const Header = () => {
  return (
    <View style={styles.container}>
      <Icon
        from="materialIcons"
        name="menu"
        size={15}
        color="green"
        style={{paddingHorizontal: 10}}
      />
      <Image source={avlogopng} style={{width: 150, height: 40}} />
      <Icon
        from={'materialIcons'}
        name="bell"
        size={15}
        color="green"
        style={{paddingHorizontal: 10}}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
    height: 50,
    backgroundColor: 'grey',
    justifyContent: 'space-between',
  },
});
