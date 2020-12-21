//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Button, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'


import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/components/AppText';
import ProfileScreen from './app/screens/ProfileScreen';
import GraphScreen from './app/screens/GraphScreen';
import AccountScreen from './app/screens/AccountScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import Screen from './app/components/Screen';
import InfoScreen from './app/screens/InfoScreen';
import Icon from './app/components/Icon';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';


const Tweets=({navigation})=>(
  <Screen>
    <Text>hello</Text>
    <Button title="tweete" onPress={()=>navigation.navigate("tweetdetails")}/>
  </Screen>
);
const TweetDetail=()=>(
  <Screen>
    <Text>hello world</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator=()=>(
  <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"dodgerblue"},headerTintColor:"white"}}>
    
    <Stack.Screen name="welcome" component={WelcomeScreen}></Stack.Screen>
    <Stack.Screen name="profile" component={ProfileScreen} options={{title:"My profile"}}></Stack.Screen>
    <Stack.Screen name="account" component={AccountScreen}></Stack.Screen>
    
  </Stack.Navigator>
);

const Tab= createBottomTabNavigator();
const TabNavigator=()=>(
  <Tab.Navigator
  tabBarOptions={{
    activeBackgroundColor:"#a6a9b6",
    activeTintColor:"black",
    inactiveBackgroundColor:"white",
    inactiveTintColor:"black"}}>
    <Tab.Screen name="welcome" 
    component={WelcomeScreen}
    options={{tabBarIcon:({size,color})=> <MaterialCommunityIcons name="home"size={size} color={color}/> }}/>
    <Tab.Screen name="profile" component={ProfileScreen}/>
  </Tab.Navigator>
);


export default function App() {
  return (
    <Screen>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator/>
      </NavigationContainer>
    </Screen>       
  );
}

