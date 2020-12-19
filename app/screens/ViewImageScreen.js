import React from 'react';
import { Image ,StyleSheet,View} from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <Image 
            resizeMode="contain"
            style={styles.image} 
            source={require("../assets/car.jpg")}/>         
        </View>
        
    );
}

const styles = StyleSheet.create({
    closeIcon:{
        backgroundColor:colors.primary,
        height:30,
        width:70,
        position:"absolute",
        top:50,
        left:30

    },
    container:{
      backgroundColor:colors.black,
      flex:1  
    },
    image:{
        width:'100%',
        height:'100%'
    }
})

export default ViewImageScreen;