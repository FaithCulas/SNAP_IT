//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/components/AppText';
import ProfileScreen from './app/screens/ProfileScreen';
import GraphScreen from './app/screens/GraphScreen';
import AccountScreen from './app/screens/AccountScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import Screen from './app/components/Screen'

export default function App() {
  const categories=[
    {label:"furniture",value:1},
    {label:"furniture2",value:2},
    {label:"furniture3",value:3},
  ]
  const[category,setCategory]=useState(categories[0]);
  
  return (
    <Screen>
      <AppPicker 
      selectedItem={category}
      onSelectItem={item=>setCategory(item)}
      items ={categories} icon ="apps" placeholder="Category"></AppPicker>
      <AppTextInput icon="email" placeholder="email"></AppTextInput>
    </Screen>       
  );
}

