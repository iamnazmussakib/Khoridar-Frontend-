import React from 'react';
import { Image, View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';

function ListItem({title, desc, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.bgLight} onPress={onPress}>
                <View style={styles.profileContainer}>
                    {IconComponent}
                    {image && <Image style={styles.profileImg} source={image}/>}
                    <View style={styles.textWrapper}>
                        <AppText style={styles.text1}>{title}</AppText>
                        {desc && <AppText style={styles.text2}>{desc}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
    textWrapper: {
        marginLeft: 15
    },
    profileImg: {
        width: 65,
        height: 65,
    },
    text1: {
        fontWeight: 'bold',
        marginBottom: 3
    },
    text2: {
        color: 'grey',
        fontSize: 16,
        marginTop: 3
    }
})

export default ListItem;