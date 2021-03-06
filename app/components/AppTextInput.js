import React from 'react';
import { TextInput, View,StyleSheet} from 'react-native';

import Icon from './Icon';
import colors from '../config/colors';
import defaultStyles from '../config/styles'

function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.container}>
            {icon&&<Icon name={icon} sixe={20} iconColor={colors.grey} style={styles.icon} backColor={colors.lightgrey}></Icon>}
            <TextInput style={defaultStyles.text}{...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.lightgrey,
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        padding:15,
        marginVertical:10,
    },
    icon:{
        marginRight:10
    }
})
export default AppTextInput;