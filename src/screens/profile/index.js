import {StyleSheet, Text, View, Button, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../common/header';
import { colors } from '../../constants/colors';
import Icon from '../../components/Icon';
const Profile = () => {
  const navigation = useNavigation();
  const data=[
    'My Bookings', "Save Deestinations", "My Documents"
  ]
  return (<View style={{flex:1}}>

<Header/>
<ScrollView style={{padding:20, backgroundColor:colors.offWhite,}}>

<View style={{backgroundColor:'#8eedf5',opacity:0.8,paddingHorizontal:30, paddingVertical:20, borderRadius:10}}>

<View style={{flexDirection:'row', flex:1, justifyContent:'space-between'}}>
<Text style={styles.greetText}>Hello Ligil,</Text>
<Icon from='ionicons' name="md-person-circle-sharp" size={60}/>

</View>
<Text style={{fontSize:18, fontWeight:'300', marginTop:10}}>+91 992929292</Text>
<Text style={{fontSize:18, fontWeight:'300', marginTop:10}}>ligl@mail.com</Text>
<TouchableOpacity style={{justifyContent:'flex-end'}}>
<Text style={{color:'blue', marginTop:10}}>Edit Profile</Text>

</TouchableOpacity>
</View>
<View style={{flexDirection:'row', justifyContent:'space-between', }}>
<Text style={[styles.greetText, {fontSize:25}]}>Upcoming Booking(s)</Text>
<TouchableOpacity style={{justifyContent:'flex-end'}}>
<Text style={{color:'blue', marginTop:10}}>View All</Text>

</TouchableOpacity>

</View>
<View style={{marginTop:10}}>
{
  data.map((item)=>{
    return(
      <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, backgroundColor:'white', marginTop:10, alignItems:'center', paddingVertical:10, borderRadius:10}}>
<Text key={item} style={{fontWeight:'400'}}>{item}</Text>
<Icon from ='ionicons' name="caret-forward" size={25}/>
      </View>
    )
  })
}
</View>
    </ScrollView>
  </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  greetText:{
    fontSize:30,
    fontWeight:'800',
    paddingTop:10
  },
});
