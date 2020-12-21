/* eslint-disable no-alert */
/* eslint-disable no-bitwise */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ToastAndroid,
  Platform,
  Alert,
  Button
} from 'react-native';


class Nfc extends React.Component {
 
render(){
  return (
    <SafeAreaView style={{padding: 20}}>
      <Text>NFC SCANNER</Text>
      <Button title="Scanner" onPress={()=>Alert.alert("scanned")}></Button>

    </SafeAreaView>
  );
}
}
  
export default Nfc;