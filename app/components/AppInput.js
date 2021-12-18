import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';

function AppInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={icon} size={20} color={colors.grey} />
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.bgLight,
        flexDirection: 'row',
        padding: 15,
        marginBottom: 15,
        borderRadius: 20,
        alignItems: 'center'
    },
    textInput: {
        fontSize: 18,
        fontFamily: 'Roboto',
        marginLeft: 10
    }
})

export default AppInput;