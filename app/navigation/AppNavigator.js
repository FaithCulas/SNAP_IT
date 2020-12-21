import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons,SimpleLineIcons} from '@expo/vector-icons';

import AccountScreen from '../screens/AccountScreen';
import GraphScreen from '../screens/GraphScreen';
import InfoScreen from '../screens/InfoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator =()=>(
    <Tab.Navigator>
        <Tab.Screen name="profile" component={ProfileScreen}options={{tabBarIcon:({size,color})=> <MaterialCommunityIcons name="home"size={size} color={color}/> }}/>
        <Tab.Screen name="graph" component={GraphScreen} options={{tabBarIcon:({size,color})=> <SimpleLineIcons name="graph"size={size} color={color}/> }}/>
        <Tab.Screen name="account" component={AccountNavigator} options={{tabBarIcon:({size,color})=> <MaterialCommunityIcons name="menu"size={size} color={color}/> }}/>   
    </Tab.Navigator>
)
export default AppNavigator;