import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function Card({title, subTitle, image, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
            <Image style={styles.img} source={image} />
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        overflow: 'hidden'

    },
    img: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        margin: 10,
    },
    subTitle: {
        fontSize: 17,
        marginHorizontal: 10,
        marginBottom: 20,
        color: colors.primary
    }
})

export default Card;