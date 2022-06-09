import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {avPlane, avlogopng, logo} from '../../assets/index';
import React, {useState, useEffect} from 'react';
import Header from '../../common/header';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../components/loader';
import Icon from '../../components/Icon';
const Signup = () => {
  const [modalOpen, setModal] = useState(true);
  const navigation = useNavigation();
 
  return (
    <>
<KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
      <ImageBackground
        source={avPlane}
       
        style={{
         
          // backgroundColor: '#e6e6e6',
          flex: 1,
          // // backgroundColor: 'black',
          // height: '100%',
          paddingTop:250,
          justifyContent: 'center',

        }}>
        <View style={{paddingTop:20, paddingHorizontal:10}}>
          <Text style={{color: colors.offWhite, fontSize: 30, fontWeight:'800'}}>Join Us</Text>

          <TextInput
            placeholder="Enter email"
            placeholderTextColor={colors.avLightPurple}
            style={styles.input}
            
          />
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor={colors.avLightPurple}
            style={styles.input}
          />
          <TextInput
            placeholder="Re Enter Password"
            placeholderTextColor={colors.avLightPurple}
            style={styles.input}
          />
          
          <TouchableOpacity
            onPress={() => navigation.replace('HomeStack')}
            style={{
              marginTop: 10,
              width: '100%',
              backgroundColor: colors.avTealGreen,
              // height: 40,
              alignItems: 'center',
              padding: 5,
              borderRadius: 10,
            }}>
        <Text style={{color:'white', fontWeight:'900', fontSize:20, paddingVertical:5}}>
          Join Go Air
        </Text> 
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{marginTop: 10, paddingHorizontal:10}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'white', fontSize: 15, fontWeight:'800', marginTop:10}}>
            already a member?
          </Text>
        </TouchableOpacity>
        </ImageBackground>
      </KeyboardAvoidingView>
      
    </>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    height: 400,
    backgroundColor: colors.avBlue,
    flex:1,
    justifyContent: 'center',
    // paddingHorizontal: 10,
    // opacity:0.8
    
    // justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  input: {
    borderRadius: 10,
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: 'black',
    // opacity:0.3,
    backgroundColor:colors.frostWhite,
    padding: 10,
  },
});

