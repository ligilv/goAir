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
import {avPlane} from '../../assets/index';
import React, {useState, useEffect} from 'react';
import Header from '../../common/header';
import {colors} from '../../constants/colors';
import Icon from '../../components/Icon';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../components/loader';
import CModal from '../../components/modal';
const Login = () => {
  const navigation = useNavigation();
const [modalState, setModalState]=useState(false)

  return (
    <>
      <Header />
      <ImageBackground
        source={avPlane}
        resizeMode="cover"
        style={{
          height: 220,
          // backgroundColor: '#e6e6e6',
          // // flex: 1,
          // // backgroundColor: 'black',
          // height: '100%',
          justifyContent: 'center',
        }}></ImageBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={{marginTop: 50}}>
          <Text style={{color: colors.offWhite, fontSize: 30}}>Login</Text>

          <TextInput
            placeholder="Enter email"
            placeholderTextColor={colors.avBlue}
            style={styles.input}
          />
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor={colors.avBlue}
            style={styles.input}
          />
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: colors.offWhite, fontSize: 15}}>
              Not a member?
            </Text>
          </TouchableOpacity>
          {/* <View style={{marginTop: 10}}>
            <Button title="Login" color={colors.avTealGreen} />
          </View> */}
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
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: 490,
    backgroundColor: colors.avBlue,
    // justifyContent: 'center',
    paddingHorizontal: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: colors.offWhite,
    padding: 10,
  },
});
