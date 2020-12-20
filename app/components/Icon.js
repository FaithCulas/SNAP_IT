import React from 'react';
import { View ,StyleSheet,Image,Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function Icon({name,size=40,backColor="black",iconColor="white"}) {
    return (
       <View style={{
           width:size,
           height:size,
           borderRadius:size/2,
           backgroundColor:backColor,
           justifyContent:"center",
           alignItems:"center",
       }}>
           <MaterialCommunityIcons name={name} size={size*0.5} color={iconColor}></MaterialCommunityIcons>
       </View>
    );
}

export default Icon;