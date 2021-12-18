import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import AppButton from './AppButton';
import AppText from './AppText';
import CatItem from './CatItem';


function AppInputPicker({icon, items, onSelectedItem, selectedItem, placeholder}) {
    const [modal, setModal] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModal(true)}>
                <View style={styles.container}>
                    <MaterialCommunityIcons name={icon} size={20} color={colors.fontColor} />
                    <AppText style={styles.textInput}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons name='chevron-down' size={20} color={colors.fontColor} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modal} animationType='slide'>
                <AppButton onPress={() => setModal(false)} title="close" backgroundColor={colors.secondary} />
                <FlatList 
                    data={items}
                    keyExtractor={cat => cat.id.toString()}
                    renderItem={({item}) => <CatItem 
                        cat={item.label}
                        onPress={() => {
                            setModal(false);
                            onSelectedItem(item)
                        }}
                    />}
                />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.bgLight,
        flexDirection: 'row',
        padding: 15,
        marginBottom: 15,
        borderRadius: 25,
        alignItems: 'center'
    },
    textInput: {
        fontSize: 18,
        fontFamily: 'Roboto',
        marginLeft: 10,
        flex: 1,
        color: colors.fontColor
    }
})

export default AppInputPicker;