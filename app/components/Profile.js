import React from 'react';
import { View , StyleSheet,Text, Alert,Image} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Octicons} from '@expo/vector-icons';

import AppText from './AppText';

function Profile({name,address,phone}) {
    return (
        <View style={styles.container}>
            <View style={styles.graphbutton}>
                <Octicons name="graph" size={20} onPress={()=>Alert.alert("graphs")}></Octicons>
            </View>
            <View>
                <Image style={styles.pic} source={require("../assets/profile.png")}></Image>
            </View>
            <View style={styles.username}>
                <AppText style={styles.title}>{name}</AppText>
            </View>
            <View style={styles.content1}>
            <View style={styles.userdetails}>
            <AntDesign name="home" size={25} color="dodgerblue"></AntDesign>
                <AppText style={styles.subtitle}>{address}</AppText>
            </View>
            <View style={styles.userdetails}>
                <AntDesign name="phone" size={25} color="dodgerblue"></AntDesign>
                <AppText>{phone}</AppText>
            </View>
            </View>
            
            <View style={styles.scanbutton}>
                <AntDesign name="scan1" size={80} onPress={()=>Alert.alert("scan")}></AntDesign>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       
    },
    content1:{
        margin:20,
        alignItems:"flex-start",
        borderColor:"grey",
        borderWidth:2
    },
    pic:{
        width: 100,
        height:100,
        borderRadius:70,
        margin:10,
        alignSelf:"center"
    },
    graphbutton:{
        alignItems:"flex-end",
        paddingRight:20,
        paddingTop:20
    },
    title:{
        color:"grey"
    },
    scanbutton:{
        marginVertical:50,
        alignItems:"center"
    },
    subtitle:{
        color:"grey"
    },
    username:{
        alignItems:"center"
    },
    userdetails:{
        flexDirection:"row",
        margin:10,
    }
})
export default Profile;