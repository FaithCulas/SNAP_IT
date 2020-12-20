import React from 'react';
import { View ,StyleSheet,Image,Text, Alert} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon'

function AccountScreen({name}) {
    return (
        <View style={styles.container}>
            <ListItem
                title="Faith Culas"
                image={require("../assets/profile.png")}
                onPress={()=>Alert.alert("profile")}
            ></ListItem>
            
            <ListItem
                title="settings"
                icon={<Icon name="account-settings" backColor="#ff8e71" />}
                onPress={()=>Alert.alert("settings")}
            ></ListItem>

            <ListItem
                title="Log out"
                icon={<Icon name="logout" backColor="#70af85"/>}
                onPress={()=>Alert.alert("log out")}
            ></ListItem>
        </View>
    );
}
const styles = StyleSheet.create({
    
    container:{
        backgroundColor:"#e4e4e4",
        flex:1
    },
})

export default AccountScreen;