//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet,SafeAreaView} from 'react-native';

import Constants from "expo-constants"

 function Screen(props) {
  return (
    <SafeAreaView style={styles.content}>
        {props.children}
    </SafeAreaView>
        
     
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Constants.statusBarHeight

    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
export default Screen;
