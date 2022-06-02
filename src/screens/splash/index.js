import {StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import {avPlane, avlogopng} from '../../assets/index';
import {colors} from '../../constants/colors';

const Splash = () => {
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
