import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {} from 'react-native-gesture-handler';
import Icon from '../../components/Icon';
import {colors} from '../../constants/colors';
import Header from '../../common/header';
import {useNavigation} from '@react-navigation/native';
const Settings = () => {
  const navigation = useNavigation();
  const [destination, setDestination] = useState(null);
  console.log(destination);
  return (
    <View style={{flex: 1}}>
      <Header />

      <ScrollView style={{padding: 20, backgroundColor: colors.offWhite}}>
        <Text style={styles.bookText}>Book flight</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text>{destination}</Text>
          <TouchableOpacity
            style={[styles.selectTypeButton, {backgroundColor: 'grey'}]}>
            <Text style={{fontWeight: '700'}}>One Way</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.selectTypeButton]}>
            <Text style={{color: 'white', fontWeight: '700'}}>Round Trip</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 20,
            alignItems: 'center',
            marginTop: 25,
          }}>
          <TouchableOpacity
            style={styles.selectDest}
            onPress={() =>
              navigation.navigate('LocationModal', {
                destination: destination,
                setDestination,
              })
            }>
            <Text style={{color: 'grey'}}>FROM</Text>
            <Text style={styles.destshotname}>Del</Text>
            <Text>Delhi</Text>
          </TouchableOpacity>
          <Icon
            from={'fontisto'}
            name="arrow-swap"
            size={20}
            color={colors.avBlue}
            style={{paddingHorizontal: 10}}
          />
          <TouchableOpacity
            style={styles.selectDest}
            onPress={() => navigation.navigate('LocationModal')}>
            <Text style={{color: 'grey'}}>TO</Text>
            <Text style={styles.destshotname}>Mum</Text>
            <Text>Mumbai</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 20,
            alignItems: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity style={styles.selectDest}>
            <Text style={{color: 'grey'}}>DEPARTURE</Text>
            <Text style={styles.destshotname}>2 June, Thu</Text>
          </TouchableOpacity>
          <Icon
            from={'fontisto'}
            name="date"
            size={20}
            color={colors.avBlue}
            style={{paddingHorizontal: 10}}
          />
          <TouchableOpacity style={styles.selectDest}>
            <Text style={{color: 'grey'}}>RETURN</Text>
            <Text style={styles.destshotname}>2 June, Thu</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 20,
            alignItems: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity style={styles.selectDest}>
            <Text style={{color: 'grey'}}>PASSENGER(S)</Text>
            <Text style={[styles.destshotname, {textAlign: 'center'}]}>2</Text>
          </TouchableOpacity>
          <Icon
            from={'fontisto'}
            name="dollar"
            size={20}
            color={colors.avBlue}
            style={{paddingHorizontal: 10}}
          />
          <TouchableOpacity style={styles.selectDest}>
            <Text style={{color: 'grey'}}>TOTAL AMOUNT</Text>
            <Text style={[styles.destshotname, {textAlign: 'center'}]}>
              130
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <Button title="Search Flight" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  bookText: {
    fontSize: 25,
    fontWeight: '800',
    paddingTop: 10,
  },
  selectTypeButton: {
    backgroundColor: colors.avBlue,
    margin: 5,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
  },
  selectDest: {
    paddingHorizontal: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    paddingBottom: 15,
    flex: 1,
  },
  destshotname: {
    fontSize: 20,
    fontWeight: '800',
  },
});
