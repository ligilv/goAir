import {View, Text, Image, Button, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {cplane, rplane} from '../../assets/index';
import {colors} from '../../constants/colors';
import Loader from '../../components/loader';
import Header from '../../common/header';
import {useSelector} from 'react-redux';
const Home = () => {
  const state = useSelector(state => state);
  const [modalOpen, setModal] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setModal(prev => !prev);
    }, 2000);
    console.log(state);
  }, []);
  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.avBlue}}>
      <Header />
      <Text>winefoew</Text>
      <Text>winefoew</Text>

      <Loader isLoading={modalOpen} />
      {/* <Image
        source={rplane}
        style={{height: 200, width: 200, marginLeft: 200}}
      /> */}
    </ScrollView>
  );
};

export default Home;
