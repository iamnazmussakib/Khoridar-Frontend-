import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function ViewImageScreen(props) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' color={colors.white} size={35}/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' color={colors.white} size={35}/>
            </View>
             <Image style={styles.img} resizeMode='contain' source={require("../assets/welcome1.jpg")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%'
    },
    viewContainer: {
        backgroundColor: colors.black,
    },
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30
    }
})

export default ViewImageScreen;