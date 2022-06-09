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
import {avPlane, avplaneV2} from '../../assets/index';
import React, {useState, useEffect} from 'react';
import Header from '../../common/header';
import {colors} from '../../constants/colors';
import Icon from '../../components/Icon';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../components/loader';
import CModal from '../../components/modal';
const Login = () => {
  const navigation = useNavigation();
  const [modalState, setModalState] = useState(false);

  return (
    <>
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
<KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={{paddingTop:20}}>
          <Text style={{color: colors.offWhite, fontSize: 30, fontWeight:'800'}}>Login</Text>

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
            <Icon
              from={'ionicons'}
              name="ios-airplane-outline"
              size={35}
              color="black"
              style={{paddingHorizontal: 10}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: 'white', fontSize: 15, fontWeight:'800', marginTop:10}}>
            Not a member?
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
        </ImageBackground>
      
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: 300,
    flex:1,
    // backgroundColor: colors.avBlue,
    // justifyContent: 'center',
    paddingHorizontal: 10,
    // opacity:0.8
    
    justifyContent: 'center',
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
