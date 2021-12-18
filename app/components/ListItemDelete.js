import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ListItemDelete({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.delete}>
                <MaterialCommunityIcons name='trash-can' color='#fff' size={30} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    delete: {
        width: 100,
        backgroundColor: "#ff4500",
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default ListItemDelete;