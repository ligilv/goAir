import { StyleSheet, Text, View, Modal , Alert, TouchableOpacity} from 'react-native'
import React , {useEffect, useState}from 'react'

const CustomModal = ({isOpen}) => {
    
    
    const [modalVisible, setModalVisible] = useState(isOpen);
    useEffect(()=>{
        setModalVisible(isOpen)
console.log("props", isOpen);
console.log("modalvisible", modalVisible);
    }, [isOpen])
    return (
      <View style={styles.container}>

     <Modal animationType='slide' transparent={true} visible={modalVisible}
    >
     <TouchableOpacity style={styles.container}  onPress={()=>{
         console.log("clicked", modalVisible, isOpen)
         setModalVisible(false)}}>

<View style={{margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5}}
         >

<Text>oe</Text>

</View>
     </TouchableOpacity>

     </Modal>
      </View>

  )
}

export default CustomModal

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
    }
})