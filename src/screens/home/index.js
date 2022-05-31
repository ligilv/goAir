import {View, Text, Image, Button} from 'react-native';
import React ,{useEffect, useState}from 'react';
import {cplane, rplane} from '../../assets/index';
import {colors} from '../../constants/colors';
import Loader from '../../components/loader';
const Home = () => {
  const [modalOpen, setModal]=useState(true)
  // useEffect(()=>{
  //   setInterval(()=>{
  //     setModal((prev)=>!prev)
  //   },3000)
  // },[modalOpen])
  return (
    <View style={{flex: 1, backgroundColor: colors.avBlue}}>
    <Text>winefoew</Text>
    <Text>winefoew</Text>
   
    <Text>winefoew</Text>
    <Text>winefoew</Text>
    <Text>winefoew</Text>
    <Button title='click' onPress={()=>setModal(!modalOpen)}/>
     <Loader isLoading={modalOpen}/>
      {/* <Image
        source={rplane}
        style={{height: 200, width: 200, marginLeft: 200}}
      /> */}
    </View>
  );
};

export default Home;
