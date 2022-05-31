import { StyleSheet, Text, View , Image, Modal} from 'react-native'
import React from 'react'
import { cplane } from '../../assets'
const Loader = ({isLoading}) => {
  return (
<Modal
        transparent={true}
        animationType={'fade'}
        visible={isLoading}
        style={{ zIndex: 1100}}
        onRequestClose={() => { console.log("clicked")}}>
        
<View style={{flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000}}>

    <View
        style={{
            
          width: 200,
          backgroundColor: 'rgba(10, 194, 210,0.7)',

          borderRadius: 200 / 2,
        }}>
        <Image source={cplane} style={{height: 200, width: 200}} />
      </View>
</View>
      </Modal>



  )
}

export default Loader

const styles = StyleSheet.create({})