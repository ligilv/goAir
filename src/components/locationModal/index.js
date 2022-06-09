import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from '../Icon';
import {colors} from '../../constants/colors';
import {data} from './mock';
import {useNavigation, useRoute} from '@react-navigation/native';
const LocationModal = () => {
  const route = useRoute();
  const [checkedValue, setCheckedValue] = useState('');
  const [dropdownData, setDropdownData] = useState(data);
  const [filteredData, setFilteredDataSource] = useState(dropdownData);
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const searchText = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = dropdownData.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(dropdownData);
      setSearch(text);
    }
  };
  const onCheck = value => {
    setCheckedValue(value.name);
    // console.log(checkedValue);
    navigation.navigate('Booking', {
      type: route.params.type == 'from' ? 'from' : 'to',
key:value.name,
      name: value.name,
      code: value.abbreviation,
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.offWhite}}>
      <View style={{paddingHorizontal: 25, paddingVertical: 30}}>
        <Text style={{fontSize: 25, fontWeight: '500'}}>
          Select {route.params.type == 'from' ? 'Destination' : 'Arrival'}{' '}
          Airport
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: colors.avTealGreen,
            marginTop: 30,
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 10,
          }}>
          <TextInput
            placeholder="Search location"
            value={search}
            onChangeText={value => searchText(value)}
          />

          <Icon from={'ionicons'} name="search" size={30} />
        </View>

        <FlatList
          style={{marginTop: 30}}
          contentContainerStyle={{paddingBottom: 100, paddingTop: 20}}
          data={filteredData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderWidth: checkedValue == item.name ? 2 : 0,
                  borderColor: checkedValue == item.name ? 'green' : null,
                  borderRadius: 10,
                }}
                onPress={() => onCheck(item)}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '700',
                    flex: 1,
                  }}>
                  {item.name}
                </Text>

                <View
                  style={{
                    borderRadius: 10,
                    borderWidth: 1,
                    paddingHorizontal: 5,
                  }}>
                  <Text>{item.abbreviation}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default LocationModal;

const styles = StyleSheet.create({});
