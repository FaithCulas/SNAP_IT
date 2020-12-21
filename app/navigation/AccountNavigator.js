import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import InfoScreen from '../screens/InfoScreen';

const Stack =createStackNavigator();

const AccountNavigator =()=>(
    <Stack.Navigator>
        <Stack.Screen name="account" component={AccountScreen}/>
        <Stack.Screen name="info" component={InfoScreen}/>
    </Stack.Navigator>
)

export default AccountNavigator;