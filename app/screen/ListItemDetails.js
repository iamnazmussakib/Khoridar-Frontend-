import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

import colors from '../config/colors';

function ListItemDetails({route}) {
    const dumy = route.params;
    return (
        <View>
            <Image style={styles.img} source={dumy.image} />
            <View style={styles.textContainer}>
                <AppText style={styles.title}>{dumy.title}</AppText>
                <AppText style={styles.subTitle}>{dumy.price}</AppText>
            </View>
            <ListItem title="Nazmus Sakib" desc="Listing" image={require('../assets/sakib.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 300,
    },
    textContainer: {
        padding: 20
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    subTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.primary
    }
})

export default ListItemDetails;