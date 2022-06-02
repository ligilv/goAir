import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Profile</Text>
      <Button title="clicl" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
