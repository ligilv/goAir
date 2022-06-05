import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from '../Icon'
import { colors } from '../../constants/colors'
import { data } from './mock'
const LocationModal = () => {
  return (
    <View style={{ flex:1, backgroundColor:colors.offWhite}}>
    <View style={{paddingHorizontal:25,paddingVertical:30 }}>
    <Text style={{fontSize:25, fontWeight:'500'}}>Select Airport</Text>
    <View style={{borderWidth:1, borderColor:colors.avTealGreen, marginTop:30, paddingHorizontal:10, flexDirection:'row', justifyContent:'space-between', borderRadius:10}}>
    <TextInput placeholder='Search location'/>
    
<Icon from={"ionicons"} name="search" size={30}/>

    </View>

    <FlatList
    style={{ marginTop:30}}
     contentContainerStyle={{ paddingBottom: 100, paddingTop:20}}
        data={data}
        renderItem={({item})=>{
           return(
           <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:20, paddingVertical:10}}>
           <Text style={{fontSize:15, fontWeight:'700'}}>{item.name}</Text>
           <View style={{borderRadius:10, borderWidth:1 ,paddingHorizontal:5}}>

           <Text>{item.abbreviation}</Text>
           </View>
           </TouchableOpacity>
           )
        }}
    />
</View>
    </View>
  )
}

export default LocationModal

const styles = StyleSheet.create({})