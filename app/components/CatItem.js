import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import AppText from './AppText';

function CatItem({cat, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={{padding: 20}}>{cat}</AppText>
        </TouchableOpacity>
        
    );
}

export default CatItem;