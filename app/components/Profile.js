import React from 'react';
import { View , StyleSheet,Text, Alert,Image} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Octicons} from '@expo/vector-icons';

import AppText from './AppText';
import Nfc from '../components/Nfc';

function Profile({name,address,phone,image}) {
    return (
        <View style={styles.container}>
            {/* <View style={styles.graphbutton}>
                <Octicons name="graph" size={20} onPress={()=>Alert.alert("graphs")} style={{paddingRight:20}}></Octicons>
                <AntDesign name="user" size={20} onPress={()=>Alert.alert("graphs")}></AntDesign>
            </View> */}
            <View>
                {<Image style={styles.pic} source={require("../assets/profile.png")}></Image>}
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
                <AppText style={styles.subtitle}>{phone}</AppText>
            </View>
            </View>
            
            <View style={styles.scanbutton}>
                <Nfc/>
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
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        paddingRight:20,
        paddingTop:20
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
    },
    scanbutton:{
        marginVertical:50,
        alignItems:"center"
    },
    subtitle:{
        paddingLeft:10,
        paddingTop:5,
        justifyContent:"center",
        alignItems:"center",
        fontSize:15
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