import {View, Text, Image} from 'react-native';
import React from 'react';
import {cplane, rplane} from '../../assets/index';
import {colors} from '../../constants/colors';
const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.avBlue}}>
      <View
        style={{
          width: 200,
          backgroundColor: 'rgba(245, 240, 240,0.1)',

          borderRadius: 200 / 2,
        }}>
        <Image source={cplane} style={{height: 200, width: 200}} />
      </View>
      {/* <Image
        source={rplane}
        style={{height: 200, width: 200, marginLeft: 200}}
      /> */}
    </View>
  );
};

export default Home;
