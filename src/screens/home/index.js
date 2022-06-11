import {View, Text, Image, Button, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {cplane, rplane} from '../../assets/index';
import {colors} from '../../constants/colors';
import Loader from '../../components/loader';
import Header from '../../common/header';
import {useSelector} from 'react-redux';
const Home = () => {
  const state = useSelector(state => state);
 
  return (
    <ScrollView style={{flex: 1,}}>
      <Header />
<Button title='click me'/>
    </ScrollView>
  );
};

export default Home;
