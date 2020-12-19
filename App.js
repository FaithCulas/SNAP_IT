//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View,SafeAreaView, Platform,Dimensions,StatusBar} from 'react-native';
import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';


import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import ProfileScreen from './app/screens/ProfileScreen'

export default function App() {
  return (
    <SafeAreaView style={styles.profilecontent}>
      <ProfileScreen/>
    </SafeAreaView>
        
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS==="android" ? StatusBar.currentHeight:0,
    alignItems:"center"
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  profilecontent: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS==="android"?StatusBar.currentHeight:0,

    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
