import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress, color = 'primary'}) {
    return (
        <TouchableOpacity style={[styles.bttn, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bttn: {
        width: '100%',
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: colors.primary
    },
    text: {
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }

})

export default AppButton;