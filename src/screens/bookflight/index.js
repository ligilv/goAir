import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from '../../components/Icon';
import {colors} from '../../constants/colors';
import Header from '../../common/header';
import {useNavigation, useRoute} from '@react-navigation/native';
const Settings = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [destination, setDestination] = useState(null);
  const [from, setFrom] = useState({
    name: route?.params?.name,
    code: route?.params?.name,
  });
  const [to, setTo] = useState({
    name: route?.params?.name,
    code: route?.params?.name,
  });
  console.log(route.params);
  useEffect(() => {
    if (route?.params?.type == 'from') {
      setFrom({name: route?.params?.name, code: route?.params?.name});
    }
    if (route?.params?.type == 'to') {
      setTo({name: route?.params?.name, code: route?.params?.name});
    }
  }, []);
  return (
    <View style={{flex: 1}}>
      <Header />

      <ScrollView style={{padding: 20, backgroundColor: colors.offWhite}}>
        <Text style={styles.bookText}>Book flight</Text>
        <Text>{route?.params?.code}</Text>
        <Text>{route?.params?.name}</Text>
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
              navigation.navigate('LocationModal', {type: 'from'})
            }>
            <Text style={{color: 'grey'}}>FROM</Text>
            <Text style={styles.destshotname}>
              {route?.params?.type == 'from' ? from.name : 'Select'}
            </Text>
            <Text>{route?.params?.type == 'from' ? from.code : 'Arrival'}</Text>
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
            onPress={() => navigation.navigate('LocationModal', {type: 'to'})}>
            <Text style={{color: 'grey'}}>TO</Text>
            <Text style={styles.destshotname}>
              {route?.params?.type == 'to' ? to.code : 'Select'}
            </Text>
            <Text>{route?.params?.type == 'to' ? to.name : 'Destination'}</Text>
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
