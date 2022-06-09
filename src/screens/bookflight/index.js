import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Button,TextInput
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
  const [isOneWay, setIsOneWay]=useState(true)
  const [from, setFrom] = useState({

  });
  const [to, setTo] = useState({
  });
  useEffect(() => {
   console.log({to, from});
    if (route.params?.type == 'from') {
      setFrom({name: route?.params?.name, code: route?.params?.code, type:route?.params?.type});
    }
   if (route.params?.type == 'to') {
      setTo({name: route?.params?.name, code: route?.params?.code,type:route?.params?.type });
    }
  }, [route.params?.key
  ,route.params?.type
  ]);
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
          onPress={()=>setIsOneWay(true)}
            style={[styles.selectTypeButton,{backgroundColor:isOneWay? colors.avTealGreen:'grey'} ]}>
            <Text style={{fontWeight: '700'}}>One Way</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.selectTypeButton, {backgroundColor:isOneWay? 'grey':colors.avTealGreen}]}
         onPress={()=>setIsOneWay(false)} 
          >
            <Text style={{ fontWeight: '700'}}>Round Trip</Text>
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
            style={[styles.selectDest,]}
            onPress={() =>
              navigation.navigate('LocationModal', {type: 'from'})
            }>
            <Text style={{color: 'grey', textAlign:isOneWay?'center':null}}>FROM</Text>
            <Text style={styles.destshotname}>
              {from.type == 'from' ? from.code : 'Select'}
            </Text>
            <Text>{from.type == 'from' ? from.name : 'Arrival'}</Text>
          </TouchableOpacity>
         { isOneWay?null:<Icon
            from={'fontisto'}
            name="arrow-swap"
            size={20}
            color={colors.avTealGreen}
            style={{paddingHorizontal: 10}}
          />}
          {isOneWay?null:
          <TouchableOpacity
            style={styles.selectDest}
            onPress={() => navigation.navigate('LocationModal', {type: 'to'})}>
            <Text style={{color: 'grey'}}>TO</Text>
            <Text style={styles.destshotname}>
              {to.type == 'to' ? to.code : 'Select'}
            </Text>
            <Text>{to.type == 'to' ? to.name : 'Destination'}</Text>
          </TouchableOpacity>}
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
            color={colors.avTealGreen}
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
            color={colors.avTealGreen}
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
    backgroundColor: colors.avTealGreen,
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
